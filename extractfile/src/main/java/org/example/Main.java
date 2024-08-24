package org.example;

import java.io.*;
import java.util.Scanner;
import java.lang.String;


public class Main {
    public static void main(String[] args) throws IOException {
        System.out.println("Start process!");

        int counter = 0;
        int counterNameFile = 0;

        String contentFile = Main.readFile(
                "/home/jonathan.samara/tmp/extractext/untitled/file/content.txt"
        );

        String contentInf = "";
        String[] contentBreaked = contentFile.split("\\.");
        int siz = contentBreaked.length;

        for (String content : contentBreaked) {
            contentInf += content + ".";

            if (counter >=20) {
                Main.writeFile(
                    String.valueOf(counterNameFile) + "file.txt",
                        contentInf
                );

                counter = 0;
                contentInf = "";
                counterNameFile++;
            } else {
                counter++;
            }
        }
    }

    private static String readFile(String nameFile) throws IOException {
        String content = "";
        File myObj = new File(nameFile);

        Scanner read = null;
        read = new Scanner(myObj);

        while (read.hasNextLine()) {
            content += read.nextLine();
        }

        read.close();

        return content;
    }

    private static void writeFile(String nameFile, String content) throws IOException {
        File file = new File("/home/jonathan.samara/tmp/output/" + nameFile);

        if (!file.exists()) {
            file.createNewFile();
        }

        BufferedWriter writer = new BufferedWriter(new FileWriter(file));
        writer.write(content);
        writer.close();
    }
}