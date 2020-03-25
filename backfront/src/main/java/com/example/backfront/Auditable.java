package com.example.backfront;

public interface Auditable {

    String getId();

    default int hash(){
        return 123;
    }
}
