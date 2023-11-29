# Observateur et Médiateur

Ce projet a pour but de présenter deux systèmes de comunication entre objets : l'observateur et le médiateur.

Le fichier index.html lance le fichier Main.js qui contient le code pour executer les cas à développer. Rendez vous sur la page index.html pour visualiser les résultats de vos réalisations la console JS.

Le dossier javascript/jsDemo contient un exemple permettant de créer des lampes simples et bleues. Cela permet de rappeler la syntaxe propre à JS pour les imports/exports et l'héritage.

## Observateur
Rendez vous sur le tag <b>"exerciceObservateur"</b>. Le but est d'implémneter un observer permettant de piloter plusieurs lampes avec un interrupteur.
- Proposez un diagramme de classe qui repprend le pattern de l'observer (cf 1-Observer.png) en incluant les notions de lampe et d'interrupteurs.
- Propoez un diagramme Objet qui permetra de réaliser le comportement demandé par le diagramme 1-ObserverSequence.png
- Développer l'observateur dans le dossier javascript/Observer 
- Implémentez dans le main le comportement demandé par le diagramme 1-ObserverSequence.png

Le tag <b>"correction-exercice-observateur"</b> Présente une correction de l'exercice

Rendez vous sur le tag <b>ExerciceOr</b>. Le but est d'implémenter la notion de va et viens à deux interrupteur (OR) au sein de l'application. Une lampe peut être pilotée par un interrupteur OU par un va et vient. 
- Proposez un diagramme de classe qui repprend la structure proposée et incluez la notion de va et vient (en fonction du diagramme précédent proposé ; la structure précédente sera impactée)
- Propoez un diagramme de séquence qui présente le comportement de l'usage d'un va et vient.
- Développer le va et vient dans le dossier javascript/Observer
- Implémentez dans le main le comportement de votre séquence.

Le tag <b>"correction-exerciceOR"</b> Présente une correction de l'exercice

## Médiateur

Rendez vous sur le tag <b>"exerciceMediateur"</b> pour développer un couloir comportant une installation electrique composée de lampes et de boutons. Employez le pattenr mediateur pour cela.
- Proposez un diagramme de classe qui repprend le pattern du médiateur (cf 3-Mediator.png) en incluant les notions de lampe, de bouton et de couloir.
- Propoez un diagramme Objet qui permetra de réaliser le comportement demandé par le diagramme 3-MediatorSequence.png
- Développer le médiateur dans le dossier javascript/Mediator
- Implémentez dans le main le comportement demandé par le diagramme 3-MediatorSequence.png

Le tag <b>"correction-mediateur"</b> présente une correction de l'exercice.

Rendez vous sur le tag <b>"ajouterBoutonLumineux"</b> pour ajouter des boutons à veilleuse dans le couloir. 
- Ajoutez au diagramme de classe le bouton lumineux 
- Propoez un diagramme Objet qui permetra de réaliser le comportement demandé par le diagramme 4-BoutonVeilleuseSequence.png
- Développer le bouton dans le dossier javascript/Mediator
- Implémentez dans le main le comportement demandé par le diagramme 4-BoutonVeilleuseSequence.png

Le tag <b>"correction-ajouterBoutonLumineux"</b> présente une correction de l'exercice.

Rendez vous sur le tag <b>"ajouterMinuterie"</b> pour ajouter une minuterie dans le couloir. La minuterie coupe l'eclairage au bout de 3 secondes. Elle peut être ré-armée par un bouton.
- Ajoutez au diagramme de classe la minuterie Proposez un diagramme de classe qui repprend le pattern du médiateur (cf 3-Mediator.png) en incluant la notion de bouton à veilleuse.
- Proposez un diagramme d'activité qui présente l'usage de la minuterie dans le couloir

Le tag <b>"correction-ajouterBoutonLumineux"</b> présente une correction de l'exercice.
