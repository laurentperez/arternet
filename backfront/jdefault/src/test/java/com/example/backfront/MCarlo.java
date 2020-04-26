package com.example.backfront;

import java.util.Random;

public class MCarlo {

    public static void main(String[] args) throws Exception {

        //Scanner keyboard = new Scanner(System.in);
        // int pts = keyboard.nextInt();

        double PI = estimate(10000);
        System.out.println("PI = " + PI);
        //PrintStream ps = new PrintStream("PiEstimate.txt");
        //ps.printf("PI estimate = %.4f", PI);

    }

    public static boolean inCircle(double x, double y) {
        double distance = Math.sqrt((x * x) + (y * y)); // sqrt
        return (distance <= 1.0);
    }

    public static double estimate(int pts) {
        int pts_in_circle = 0;
        int pts_total = 0;
        double pi;
        Random rnd = new Random();
        for (int i = 0; i < pts; i++) {
            double x = rnd.nextDouble();
            double y = rnd.nextDouble();
            System.out.println("x = " + x + " y = " + y);
            if (inCircle(x, y)) {
                pts_in_circle++;
            }
            pts_total += 1;
        }
        pi = (4.0 * ((double) pts_in_circle / pts));
        return pi;
    }
}
