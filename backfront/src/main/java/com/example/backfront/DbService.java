package com.example.backfront;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class DbService {

    @Autowired
    private HibUtils hibUtils;

    @Transactional
    public String doHib() {
        SessionFactory hf = hibUtils.getHibernateFactory();
        Session s = hf.getCurrentSession();

        System.out.println("hu = " + s);
        return "x";
    }
}
