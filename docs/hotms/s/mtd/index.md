---
layout: default
title: Man Trap Deployment
permalink: package--hotms-s-mtd
parent: SecureCommunication
grand_parent: hotms
---

# Man Trap Deployment

Man Trap Deployment is a package that contains...



## Use Cases

The following are the use cases of the Man Trap Deployment subsystem. Each use case has primary and secondary scenarios
that are elaborated in the use case descriptions.



![UseCase Diagram](./usecases.png)

## Users

The following are the actors of the Man Trap Deployment subsystem. This can include people, other subsystems
inside the solution and even external subsystems.



![User Interaction](./userinteraction.png)

## Interface

The subsystem has a REST, CLI, WebSocket, and Web interface. Use Cases and Scenarios can use any or all
of the interfaces to perform the work that needs to be completed. The following  diagram shows how
users interact with the system.

![Scenario Mappings Diagram](./scenariomapping.png)



## Logical Artifacts

The Data Model for the  Man Trap Deployment subsystem shows how the different objects and classes of object interact
and their structure.

![Sub Package Diagram](./subpackage.png)

### Sub Packages

The Man Trap Deployment subsystem has sub packages as well. These subsystems are logical components to better
organize the architecture and make it easier to analyze, understand, design, and implement.



![Logical Diagram](./logical.png)

### Classes

The following are the classes in the data model of the Man Trap Deployment subsystem.




## Deployment Architecture

This subsystem is deployed using micro-services as shown in the diagram below. The 'micro' module is
used to implement the micro-services in the system. The subsystem also has an CLI, REST and Web Interface
exposed through a nodejs application. The nodejs application will interface with the micro-services and
can monitor and drive work-flows through the mesh of micro-services. The deployment of the subsystem is
dependent on the environment it is deployed. This subsystem has the following environments:
* [local](environment--hotms-s-mtd-local)
* [dev](environment--hotms-s-mtd-dev)
* [test](environment--hotms-s-mtd-test)
* [prod](environment--hotms-s-mtd-prod)



## Physical Architecture

The Man Trap Deployment subsystem is physically laid out on a hybrid cloud infrastructure. Each microservice belongs
to a secure micro-segmented network. All of the micro-services communicate to each other and the main app through a
REST interface. A Command Line Interface (CLI), REST or Web User interface for the app is how other subsystems or actors
interact. Requests are forwarded to micro-services through the REST interface of each micro-service. The subsystem has
the a unique layout based on the environment the physical space. The following are the environments for this
subsystems.
* [local](environment--hotms-s-mtd-local)
* [dev](environment--hotms-s-mtd-dev)
* [test](environment--hotms-s-mtd-test)
* [prod](environment--hotms-s-mtd-prod)


## Micro-Services

These are the micro-services for the subsystem. The combination of the micro-services help implement
the subsystem's logic.


### local

Detail information for the [local environment](environment--hotms-s-mtd-local)
can be found [here](environment--hotms-s-mtd-local)

Services in the local environment

* web : s_mtd_web


### dev

Detail information for the [dev environment](environment--hotms-s-mtd-dev)
can be found [here](environment--hotms-s-mtd-dev)

Services in the dev environment

* web : s_mtd_web


### test

Detail information for the [test environment](environment--hotms-s-mtd-test)
can be found [here](environment--hotms-s-mtd-test)

Services in the test environment

* web : s_mtd_web


### prod

Detail information for the [prod environment](environment--hotms-s-mtd-prod)
can be found [here](environment--hotms-s-mtd-prod)

Services in the prod environment

* web : s_mtd_web


## Activities and Flows
The Man Trap Deployment subsystem provides the following activities and flows that help satisfy the use
cases and scenarios of the subsystem.


### Messages Handled

The Man Trap Deployment subsystem is an event driven architecture and handle several events. The following
events are handled by this subsystem. Please note that this subsystem is not the only subsystem that handles
these events.

| Message | Action | Description |
| --- | --- | --- |



### Messages Sent

| Event | Description | Emitter |
|-------|-------------|---------|



## Interface Details
The Man Trap Deployment subsystem has a well defined interface. This interface can be accessed using a
command line interface (CLI), REST interface, and Web user interface. This interface is how all other
subsystems and actors can access the system.


