package com.example.backfront;

import java.io.FileNotFoundException;
import java.io.UncheckedIOException;

public class Jfresh {


    public static void main(String[] args) {
        String mode = "C";

        boolean result = switch(mode) {
            case "A" -> true;
            case "B" -> false;
            case "C" -> throw new UncheckedIOException(
                    "mode C",
                    new FileNotFoundException());
            // as we'll see in "Exhaustiveness", `default` is not necessary
            default -> throw new IllegalArgumentException("Seriously?! 🤬");

        };
        System.out.println("result = " + result);

    }



}
