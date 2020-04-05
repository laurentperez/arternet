package com.example.backfront.db;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.orm.jpa.vendor.HibernateJpaSessionFactoryBean;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManagerFactory;

@EnableAutoConfiguration
@Component
public class HibUtils {

    private SessionFactory hibernateFactory;

    @Autowired
    public HibUtils(EntityManagerFactory factory) {
        if(factory.unwrap(SessionFactory.class) == null){
            throw new NullPointerException("factory is not a hibernate factory");
        }
        this.hibernateFactory = factory.unwrap(SessionFactory.class);
    }

    public SessionFactory getHibernateFactory() {
        return hibernateFactory;
    }
}
