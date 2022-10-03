
### pseudo-elements
pseudo elements don't work on images
they arre inline by default so you can use inline-block

::before, ::after

## inset property 
The inset CSS property is a shorthand that corresponds to the top, right, bottom, and/or left properties. It has the same multi-value syntax of the margin shorthand.



## Fast UI that talks to a backend (api) 
* het woord interface betekend : koppel, oftewel je koppelt de gebruiker aan iets?
UI should react quickly (usually not async code)
- the communication between the browser and the server takes longer
- user interfaces should react quickly (bij UI draait het voornamelijk om een aangename en betekenisvolle gebruikersomgeving te creeeren).

interfaces zijn overal te vinden; hieronder enkele voorbeelden:: 
-mensen die de taal niet spreken, maken gebruik van een tolk
-televisie heeft afstandsbediening
-mp3 speler heeft knoppen.

Pattern :
- update the UI first
- then do the slower work the async work 
- at last if you need an ID from the backend; ask for it and asynchronously add it







