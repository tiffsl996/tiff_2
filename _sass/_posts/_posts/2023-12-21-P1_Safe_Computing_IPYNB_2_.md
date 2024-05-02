---
comments: True
layout: notebook
title: P1 Safe Computing
description: Team teach on safe computing
type: collab
author: Abby, Chrissie, Tanvi, Sreeja
toc: True
courses: {'csp': {'week': 16}}
---

# **Safe Computing**

## Information Collection:
Most computers and the computer systems store the information of their users. Information like your location, cookies, and browsing history which can be used to identify your personal data. 

- Search engines can track your search history and then they can use that to suggest websites and other search phrases that would be personal to you. This is known as target marketing 
- Devices, websites and networks can collect information about a user’s location such as recording the IP address of the devices they use. 
- Besides a specific spot on the map, certain programs can also record all the locations you've been to, how you got there, and how long you were there. 

A key tenet of safe computing is protecting your personally identifiable information, or (PII).

### What is Personally Identifiable Information: 
- This information that can be used to identify you includes your 
    - Age
    - Race
    - Phone number
    - Medical information
    - Financial information
    - Social security numbers

## Benefits and Harms of Information Collection

### Benefits
There are quite a few benefits for websites and applications to collect their user's information. 
- The collection of personal information can be used to enhance your experience online. 
    - For example, it can help you connect with friends on social media or find products you're looking for faster. 
- Gathering information is crucial for research and development in various fields, including science, technology, medicine, and social sciences. It helps in advancing knowledge, innovation, and the development of new technologies.
- Certain applications such as TikTok's For You page rely on the collection of personal information to function. 

### Harms
On the other hand, people are generally concerned about the rise of information collection, and with good reason. Without strong protections, this collection of information could be exploited.

For example, some personal information about your location and travel routes might be used for stalking purposes. Other pieces of personal information, especially your social security number, can be used to steal your identity. Companies that collect personal information could put their users at risk if they're hit by a data breach.

## Popcorn Hack 1
What is 1 benefit and harm of information collecting?

answer: 

## Think Before You Post
Another type of information on the internet that might harm you is the information you put online yourself. There's potentially a lot of information you can find out about someone just by looking at their social media accounts or by combining information posted on different accounts. You might be revealing things you aren’t comfortable with by accident.

As an example: Keen-eyed viewers can sometimes tell where someone lives based on a picture of the view outside of their window. 

Information placed online can be used in unintended ways. A nasty message or unwise post can come back to bite you if it's sent to prospective employers or college admissions officers. Thanks to the power of screenshots and forwarding, it can also be very difficult to delete information once it's out there.

It's a good idea, in general, to think carefully before you put anything on the internet. When in doubt, defer to the side of caution.

## Other Dangers of Computing
- Your computer might become infected with a virus or a worm. A virus is a malicious program. It's called a virus because, like a real virus, it can gain unauthorized access to something and then copy itself. Viruses are attached to infected files and must be activated by the user. By contrast, worms can operate independently. 

In 2000, the ILOVEYOU virus, named for the fake love-letter email it attached itself to, caused over ten billion dollars of damage across the world. In 2017, the WannaCry worm attack caused a similar amount of damage by encrypting hard drive files and holding them for ransom.

Computer viruses are a type of malware , short for malicious software, is intended to damage or take partial control over a computing system.

Scammers online can take advantage of human error to gain potentially harmful information. Phishing, for example, works by tricking users into providing their personal information by posing as a trustworthy group. For example, you might get a fake email from someone pretending to be your bank that says your credit card or bank account has an issue and they need your username and password to fix it. 


The information you send over public networks, like the Wifi network at a coffee store, has the potential to be intercepted, analyzed, and modified. One of the ways this can happen is through a , a wireless access point that gives unauthorized access to a secure network. 

A key way to practice safe computing is to be wary. You never want to open or click any links in an email that you don't recognize the sender of. (Hackers can also gain access to people's accounts, so also be wary if you get a strange message from a friend.) Furthermore, be careful about what you download onto your devices; only download from websites you trust.

Fortunately, these concerns haven't gone unnoticed, and today there are many systems in place to help protect you on the internet.

# Principles of Safe Computing

## Authentication
measures keep people from gaining unauthorized access to your accounts. We're going to look at two of them here: making a  and implementing a multi-factor  method.

A passphrase is a password that's easy for you to remember but difficult for someone else to guess, regardless of how well they know you. You don't want to use a generic phrase to create your password ("password," "12345,") or something that could be easily guessed (your name, the name of your family members, etc.) Strong passwords often use a variety of characters, such as uppercase letters, numbers, and symbols (M4r13_cur13).

This [website](https://www.security.org/how-secure-is-my-password/) can help you determine how strong your password is, and also highlights what makes a password weak or strong. 

You're mostly in charge of creating your own strong passwords, although many companies have implemented requirements for passwords to make them stronger. (They may require you to have a capital letter in your password, for example, or a symbol).

On the other hand, multifactor  is provided by the website you're using, although you can generally choose to opt-in or out of it. Multifactor  is a way to control who gets access to your accounts by requiring multiple (at least two) methods of verification.

Typically, these proofs will fall into one of three categories, and they'll usually be in two separate categories.
- Knowledge: this is something you know, like a password or PIN number. This can also include verification questions. (What's your favorite food? Where were you born?)
- Possession: this is something that you have or own, such as a USB drive or an access badge. This can also include one-time passwords sent to a different device like your cell phone.
- Inheritance: this is something that you own intrinsically, like your fingerprints or voice. 

A multifactor  system can provide multiple verification options for user convenience, as well as security. For example, a login system for your email account might let you choose between sending a verification code to another email or to your phone in order to get in. That way you can still get into your account even if you don't have your phone on-hand, 

The more layers of verification you have, the more secure your account generally is, although there are limits and exceptions to the rule.

## Encryption

Encryption, another way of protecting people's data, is the process of encoding data to prevent unwanted access. (Decryption is the process of decoding data.) Traditionally, encryption was used to send and receive secret messages between spies or military generals. Coding mechanisms like the Caesar Cipher and the French Great Cipher became famous.

Both of these encryption methods use a key, or a secret piece of information, to keep their messages secret. Only the person the message is intended for should know the key.

For example, the Caesar Cipher works by shifting all the letters in a message down or up a given alphabet. In this case, the key is the number of letters that the message is shifted by. In the image below, all the letters are shifted up by 3: E becomes B, D becomes A, and so on. Therefore, the key is 3.




![Caesar_cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Caesar_cipher_left_shift_of_3.svg/1200px-Caesar_cipher_left_shift_of_3.svg.png?20140119115628) 
 

Today, you can use the computer to decode such simple codes quickly, and therefore more complex methods of encryption are needed.

## Popcorn Hack #2
Using the image above, decode this message: Zeofpqjxp fp qeb ybpq elifxyv

answer:

### Two common approaches to encryption are: 
- Symmetric key encryption uses one key for both encrypting and decrypting code.
- asymmetric encryption uses a public key to encrypt but a private key to decrypt the message. 

The  system relies on digital certificates. These are issued by Certificate Authorities (CAs) to trusted sites. They allow other computers to verify that a website is what it says it is. These certificates are essential to the  system because they foster trust between websites. Think of the certificates to be a little like the signature on a check—once we see that signature, we know that the check is trustworthy.

## Popcorn Hack #3
What are the two common approaches to encryption?

answer: 

### Other Safe Computing Practices
- Creating and downloading regular  helps to patch up any previously undetected errors or vulnerabilities.
- Computer virus and  scanning software can help protect your computer from viruses and . Some famous brands are Norton and McAfee. 
- monitor internet traffic and block websites deemed unsafe, can also help you protect your devices.
- Making  of important data can help mitigate the effects of hardware failure or virus attacks.
- Knowing and controlling the permissions companies have to your data can empower you to decide what you're comfortable with them having. 
- Keeping your devices out of unsafe locations helps prevent them from being physically stolen or hacked into. 
- Being aware of  is also important. Free WiFi connections are often vulnerable to hackers.
- Finally, stay informed! Technology is ever-changing, and staying aware of these changes will help you protect yourself.

# Homework Hacks
- fill out this google form and send us a screenshot of your score
- https://docs.google.com/forms/d/e/1FAIpQLScNx2gPRfqgCE5CWKfRRPtrwhqtGTpmzcyaTzFksujLf-TvVA/viewform?usp=sf_link 
