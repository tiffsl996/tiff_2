---
comments: True
layout: post
title: P1 The Internet
description: Big Idea 4.1 Student Teaching
type: collab
author: Tanav, Aidan, Srini, Anvay
toc: True
courses: {'csp': {'week': 14}}
---

# 4.1 The Internet

## Part 1

- <span style="background-color: #b63c59">How did the internet come to life?</span> It all began by these massive computers. They were isolated and very hard to work on. As a result, the idea of the internet came to life. It was to easily communicate between users and opened many gateways to digital communication.   

- <span style="background-color: #b63c59">The internet</span> is basically a way for computers to talk to each other using networks

- A <span style="background-color: #b63c59">packet</span> is a small amount of data or information sent over a network that includes information about the sender and destination.

![Packet](../../../images/packet.jpeg)

- A <span style="background-color: #b63c59">computer network</span> is a group of computing devices interacting with each other in some sort of way

## How do computers send data to each other?

- In a process called <span style="background-color: #b63c59">packet switching</span>, a message(file) is broken up into packets which are reassembled by the receiver. It is often times converted into something the computer can understand like binary. 

- A <span style="background-color: #b63c59">path</span> is between the sender and receiver and the router will help find the path. For example, If you're accessing a website, routers determine the optimal path for the data packets to traverse the internet (routing), following a series of interconnected devices (paths) to reach the web server.

- <span style="background-color: #b63c59">Routing</span> is a process that finds a path from the sender to receiver




- <span style="background-color: #b63c59">Bandwidth</span> is the maximum amount of data that can be sent in a computer network


## Popcorn Hack 1

![The Internet](../../../images/network.png)

- What is the diagram showing?

1. Bandwidth
2. Computer Network
3. Packet Switching
4. Operating System

* Two possible answers

<button id="answer1">Answer</button>

<script>
    const answerButton = document.getElementById('answer1')

answerButton.addEventListener('click', (event) => {
    answerButton.innerHTML = 'The two answers are 2 and 3 because it shows networks between a sender and receiver and the process of sending packets to send data.'
});
</script>


## Part 2

- <span style="background-color: #b63c59">Protocols</span> are sets of rules for the way data is transferred throughout the internet

- There are two acceptable models that show the layers that data is sent by protocols
    - OSI 
    - TCP/IP
        - TCP/IP is more widely accepted but OSI is still used

- The OSI(Open Systems Interconnect) model shows the 7 layers you have to go throught to communicate between other computers

![OSI Model](../../../images/osi.png)

- TCP(Transmission Control Protocol) is a protocol for how to send messages between devices

![TCP Model](../../../images/tcp.png)

![Waist Model](../../../images/narrow-waist.png)

## Popcorn Hack 2

A request from the frontend to the backend is being made and the response returns JSON. What layer(s) did the data go through?

1. Application
2. Transport
3. Internet
4. Network Access
5. All layers


<button id="answer2">Answer</button>

<script>
    const answerButton2 = document.getElementById('answer2')

answerButton2.addEventListener('click', (event) => {
    answerButton2.innerHTML = '5 is correct because the data has travel through all layers in order to be sent by the client and received by the server'
});
</script>

## What is an example of the OSI/TCP Model

![Process](../../../images/process.png)

## Network Access/Internet Layer

- The process usually starts with the Internet layer where the user's computer is assigned a unique IP address so it can communicate with other computers or web servers
    - A DHCP(Dynamic Host Configuration Protocol) assigns the computer its unique IP address

## Application/Transport Layer

1. The user sends a <span style="background-color: #b63c59">request</span> to a server or page
2. If the user wants to go to a website like amazon.com, it has its <span style="background-color: #b63c59">unique</span> IP address but it isn't readable by humans so a <span style="background-color: #b63c59">DNS</span>(Domain Name Service), which stores the IP address inside of a database, sends it over the user
3. During this process, the user sent a <span style="background-color: #b63c59">TCP</span> request for the IP of amazon.com to the DNS server and the DNS server sent a TCP <span style="background-color: #b63c59">response</span> in the form of packets for the IP of amazon.com
4. Now, the user can send a <span style="background-color: #b63c59">request</span> to the IP of the webpage like amazon.com
5. The last step is for a <span style="background-color: #b63c59">router</span> to send the user to the correct destination of the IP. In this case, amazon.com.


## Popcorn Hack 3

How does a user get the IP for a web page when they enter the url?

1. It goes through layers when the request is made to the webp
2. The DNS sends it to the user in the form of a TCP response
3. There is no need for the user to know the ip when going to the url
4. The user automatically knows

<button id="answer3">Answer</button>

<script>
    const answerButton3 = document.getElementById('answer3')

answerButton3.addEventListener('click', (event) => {
    answerButton3.innerHTML = '1 is correct but it doesnt answer the question. 2 is the correct answer because the DNS stores the url as a IP in a database and sends it the user when the user makes a request to the url'
});
</script>

## Protocols used here are:
- <span style="background-color: #b63c59">HTTP</span> - Hyper Text Transfer Protocol   
    - HTTP is a protocol that says how data is transferred over the internet
    - Used for sending <span style="background-color: #b63c59">requests</span> from a user and receiving a <span style="background-color: #b63c59">response</span> in the form of HTML or JSON from the server.
    - In last trimester, you made a request to the backend from the frontend using HTTP and it sent a response in the form of JSON
- <span style="background-color: #b63c59">HTTPS</span>
    - HTTPS is HTTP with security. In last trimester's final project, the devops person used certbot to make the HTTP requests to the backend secure.

![HTTP](../../../images/http.png)

- <span style="background-color: #b63c59">TCP/IP</span> - Transmission Control Protocol, Internet Protocol
    - TCP/IP is important because HTTP requests and responses depend on a TCP connection between the client and server
    - Once a TCP connction is made, HTTP requests are carried in TCP packets
    - IP sends the TCP packets to the correct location
    - When you made the HTTP request from the frontend to the backend, your request was broken up into TCP packets and sent to the correct location by IP

![TCP/IP](../../../images/tcpip.png)

## Homework

Bandwidth:
1. In the context of computer networks, elaborate on the concept of bandwidth. Discuss how bandwidth influences the speed and efficiency of data transfer. Provide examples of scenarios where both high and low bandwidth can impact the performance of internet connected devices.

Computer Network:
2. Explore computer networks by detailing the key components and their interplay. Discuss the significance of scalability, security, and reliability in designing computer networks. Provide real-world examples of how different types of computer networks, such as local area networks (LANs) and wide area networks (WANs), serve distinct purposes in various settings.

Packet Switching:
3. Investigate packet switching and its role in modern communication systems. Compare and contrast packet switching with alternative methods, such as circuit switching, highlighting the advantages that packet switching brings to data transmission. Describe the journey of a data packet through a network.

## 
