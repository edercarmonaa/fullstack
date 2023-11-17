Diagrama que representa la situación en la que el usuario crea una nueva nota utilizando la versión de una sola página de la aplicación.

```mermaid
  sequenceDiagram
    actor User
    participant browser
    participant server
    
    User ->>browser: Enter note
    User ->>browser: click on save button
    
    browser->>browser: redrawNotes()

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created. 
    deactivate server
     Note right of browser: "content": {"message":"note created"}
```
