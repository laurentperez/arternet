package com.example.backfront;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.util.stream.Stream;

@SpringBootApplication
public class BackfrontApplication {

    /* JAVA9 JAVA14 VEILLE */
    /* JAVA9 JAVA14 VEILLE */
    /* JAVA9 JAVA14 VEILLE */
    /* JAVA9 JAVA14 VEILLE */

    // JPA + TEST: https://www.baeldung.com/spring-boot-hibernate
    public static void main(String[] args) {
        SpringApplication.run(BackfrontApplication.class, args);
    }

    @Autowired
    private DbService dbService;

    @Bean
    CommandLineRunner init(UserRepository userRepository) {
		System.out.println("dbService = " + dbService.doHib());

		// var users = null;
        return args -> {
            var users = new String[]{"John", "Julie", "Jennifer", "Helen", "Rachel"};
            Stream.of(users).forEach(name -> {
                var user = new User(name, name.toLowerCase() + "@domain.com");
                userRepository.save(user);

			});
            userRepository.findAll().forEach(System.out::println);
        };
    }

}
