
document.body.onload = buildPortfolio;


data = [
    {
        title: "S1G Ultrasonic molding machine",
        images: ["img/pf/S1G/sonoruss1g-1.jpg", "img/pf/S1G/processstatemachine.png", "img/pf/S1G/injections.jpg"],
        tags: ['Professional', 'PLC', 'B&R', 'Structured Text', 'C++'],
        description:`<p>Ultrasound molding: The technology by which a plastic injection machine melts plastic pellets using ultrasounds instead of a heated barrel.</p>
            <p>My main task as lead PLC programmer in Ultrasion was to organize 7 years worth of code by many different programmers. Most it was patched as needed as the ultrasonic molding research progressed. This led to a very high technological debt: no documentation, many dependencies between supposedly encapsulated programs, unused and redundant code, obsolete functionality and a confusing user interface.</p>
            <p>At the time of my incorporation, there were no programmers left to tutor me. I proceeded to read and understand all the software and hardware, and carefully rewrote it over the span of a year. Some of the tasks I did were:</p>
            <ul>
                <li>Created documentation.</li>
                <li>Simplified many sequences (with the biggest having about 150 states).</li>
                <li>Improved encapsulation.</li>
                <li>Improved data sampling and exporting.</li>
                <li>Simplified HMI for better user experience.</li>
                <li>Designed hardware changes to improve safety and compatibility with an external robot arm.</li>
                <li>Added many new functions as they were requested.</li>
            </ul>
            <p>
            <p>Overall, I became proficient in PLC programming using B&R's Automation Studio development environment.</p>`
    },

    {
        title: 'S2G Ultrasonic molding machine',
        images: ['img/pf/S2G/S2G.png', 'img/pf/S2G/S2GCAD.png'],
        tags: ['Professional', 'PLC', 'B&R', 'Structured Text', 'C++', 'Solidworks'],
        description:`<p>The S2G machine is a redesign of the S1G for plastic pieces that require higher pressures.</p>
            <p>Just like the S1G, the S2G had unoptimized code. Rather than rewriting it, I adapted the code I had already rewritten from the S1G. There were a few problems that I had to solve, though:</p> 

            <ul>
                <li>The axes had mechanical differences which meant the homing and anti-collision systems had to be rewritten.</li>   
                <li>The mold axis incorporated a toggle mechanism, which required a CAM control in order to have a lineal mold movement.</li>
                <li>New external sensors meant I had to write a new data adquisition program. It plotted internal pressure and temperature for the last injection cycles (among other data) and proved very useful to increase repetibility.</li>
                <li>Had to redo dozens of parts and hundreds of linkages in the SolidWorks 3D model.</li>
                <li>Many other small changes.</li>
            </ul>`
    },

    {
        title: 'Closed loop force control injection system',
        images: ["img/pf/Force Control/forceloop.png", "img/pf/Force Control/forcesensor.png"],
        tags: ['Professional', 'PLC', 'B&R', 'Structured Text'],
        description:`<p>During the development of an injection molding method with very low residence time, I encountered the following problem: a piston was supposed to push plastic at a precise force as it melted, but the servo that moved the piston could only control its own torque, not the actual force after considering losses in the transmission.</p>
        <p>After installing a pressure sensor at the piston, I developed the PI controller shown.</p>
        <p>The implementation was particularly tricky as the plastic being pushed was continuously melting and flowing into the mold cavities. This led to the piston having to stop and start multiple times per second, meaning that static and dynamic frictions had to be considered, as well as backlash and other problems.</p>`
    },

    {
        title: "Ultrasion's website",
        images: ["img/pf/Ultrasion website/0.png", "img/pf/Ultrasion website/1.png", "img/pf/Ultrasion website/2.png"],
        tags: ['Professional', 'WebDev', 'Wordpress'],
        description:`<p>The company I was working on, Ultrasion, had a relatively old website. I remade it from scratch using Wordpress.</p>
        <p>Site available at the following link:</p>`,
        link: "https://ultrasion.eu"
    },

    {
        title: "IIOT Telemetrics Software",
        images: ["img/pf/IIOT telemetrics/0.png", "img/pf/IIOT telemetrics/1.jpg"],
        tags: ['Professional', 'PLC', 'Codesys', 'Python', 'Ladder', 'Structured Text'],
        description:`<p>Project in which a client requested a global telemetry system for all the machines they sold. The purpose was to transmit productivity data and alarms for predictive maintenance.</p>
        <p>Due to the variety in hardware on their machines, I had to learn about the following technologies/applications/brands:</p>
        <ul>
            <li>MQTT</li>
            <li>Node-Red</li>
            <li>Python</li>
            <li>Turck PLCs</li>
            <li>Codesys</li>
            <li>TX Visu Pro</li>
            <li>HMWIN</li>
            <li>FPWIN</li>
            <li>Drive Composer</li>
            <li>Modbus, RS-485</li>
            <li>Ethernet/IP</li>
        </ul>`
    },

    {
        title: "FEA results visualizer",
        images: ["img/pf/FEA visualizer/0.png", "img/pf/FEA visualizer/1.png"],
        tags: ['Professional', 'Python'],
        description:`<p>Python program to visualize Finite Element Analysis results presented as a mesh in HDF5 format. It has the following functionalities:</p>
        <ul>
            <li>Deformation, with an exageration factor since deformations are usually small.</li>
            <li>Transparency to check internal stresses.</li>
            <li>Identification and skipping of interior walls so that the visualization is smoother.</li>
        </ul>`
    },

    {
        title: "Cura plugin for FEA Stress analysis",
        images: ["img/pf/Cura plugin/0.jpg", "img/pf/Cura plugin/1.jpg"],
        tags: ['Professional', 'Python', '3D Printing'],
        description:`<p>Research project with the goal of creating a plugin to preview if a 3D printed part would be able to withstand a set of loads, and to print it in the best orientation possible.</p>
        <ul>
            <li>Offers a new screen to input anchors and loads on selected faces.</li>
            <li>Offers a menu to select the physical properties of the material (Young, Poisson...) in each axis (X, Y, Z).</li>
            <li>Connects to an external FEA engine to send data and receive results. This part was done by a different developer.</li>
            <li>It integrates the standalone Python script I made to represent a results mesh, meaning it has support for deformation, transparency and detection of inner nodes.</li>
        </ul>`
    },

    {
        title: "Pseudo-slicer algorithm",
        images: ["img/pf/Slicer/0.jpg", "img/pf/Slicer/1.jpg", "img/pf/Slicer/2.jpg"],
        tags: ['Professional', 'Python', '3D printing'],
        description:`<p>As a subproject of a Cura plugin I did, I had to write a Python program which would take a boundary condition (anchor or load) and convert it to gcode.</p>
        <p>The gcode lines would represent the surface's geometry, while also including metadata (load magnitude and direction).</p>`
    },

    {
        title: "Geolocation-based fertilizer",
        images: ["img/pf/Fertilizer/0.jpg", "img/pf/Fertilizer/1.jpg"],
        tags: ['Professional', 'PLC', 'B&R', 'Structured Text', 'C++', 'Arduino', 'Electronics'],
        description:`<p>Research project in which we developed a tractor implement capable of fertilizing a field according to a variable feedrate map.</p>
        <p>I coded all the software and designed most of the electronics.</p>`
    },

    {
        title: "Python simulator for trading strategies",
        images: ["img/pf/Backtrader/0.jpg", "img/pf/Backtrader/1.png"],
        tags: ['Hobby', 'Python'],
        description:`<p>Backtrader program written in Python, used to test trading strategies on a large set of historical stock prices.</p>
        <p>My goal was to test and optimize a strategy which had been giving me good results using dummy trades, before I actually used real money.</p>`
    },

    {
        title: "React Dashboard",
        images: ["img/pf/ReactDashboard/1.png", "img/pf/ReactDashboard/2.png", "img/pf/ReactDashboard/3.png", "img/pf/ReactDashboard/4.png", "img/pf/ReactDashboard/5.png", "img/pf/ReactDashboard/6.png"],
        tags: ['Hobby', 'WebDev', 'React', 'HTML', 'CSS', 'Javascript'],
        description:`<p>A simple static dashboard with day/night mode, pages with many different menus and graphics, and a main page with a summary of the pages.</p>
                     <p>Based on <a href="https://www.youtube.com/watch?v=wYpCWwD1oz0">this tutorial</a>.</p>`,
        link: "https://github.com/Tyronnosaurus/react-dashboard"
    },

    {
        title: "Comic resizer with size anomaly detection",
        images: ["img/pf/ComicResizer/0.png"],
        tags: ['Hobby', 'Python'],
        description:`<p>Utility to batch resize all pages of a comic, with automatic detection of double pages and other size related anomalies.</p>
        <p>If smart resizing is enabled, pages which are considerably larger or smaller than the majority will not be resized to the user specified size, but rather to a proportional size based on its original ratio to the other pages.</p>`,
        link: "https://github.com/Tyronnosaurus/ComicResizer"
    },

    {
        title: "Firefox extension: URL tagger",
        images: ["img/None.png"],
        tags: ['Hobby', 'WebDev', 'Javascript'],
        description:`<p>Firefox add-on, based on WebExtensions. It lets the user manually tag a website as 'Seen', 'Want', 'Reached', 'ToDo'... Links to that website will then be accompanied by the correpsonding icon.</p>
        <p>I made this mostly for self use, since I often find myself reading things I had already read years ago. The browsing history is useful but it eventually cleans old items (or else it would be gigantic). This extension serves me as a more permanent alternative.`,
        link: "https://github.com/Tyronnosaurus/site-tags"
    },

    {
        title: "Firefox extension: Zoom single item",
        images: ["img/pf/ZoomSingleItem/2.png", "img/pf/ZoomSingleItem/3.jpg", "img/pf/ZoomSingleItem/4.png"],
        tags: ['Hobby', 'WebDev', 'Javascript'],
        description:`<p>Firefox add-on, based on WebExtensions. It lets the user permanently resize a single element in a website (including all pages in the same domain).</p>        
        <p>This could be useful for accessibility, or simply for when a very repetitive task is cumbersome due to constantly having to click very small items on a website.</p>`,
        link: "https://github.com/Tyronnosaurus/zoom-single-item"
    },

    {
        title: "Task tracker made in React",
        images: ["img/pf/ReactTaskTracker/1.jpg", "img/pf/ReactTaskTracker/2.jpg"],
        tags: ['Hobby', 'WebDev', 'React', 'Javascript'],
        description:`<p>Small application to schedule tasks. Made to learn about React, various React hooks, and React Router. Based on a tutorial by Traversy Media.</p>`,
        link: "https://github.com/Tyronnosaurus/react-task-tracker"
    },

    {
        title: "Injection machine data postprocessor",
        images: ["img/pf/CSV postprocessor/0.jpg"],
        tags: ['Professional', 'C#'],
        description:`<p>A client contacted us about a bug: an old machine from our company was exporting large amounts of process data in the wrong format. I developed this small application to postprocess the data into a format they could work with.</p>`
    },

    {
        title: "Self-hosted server",
        images: ["img/pf/Server/0.png"],
        tags: ['Hobby', 'Linux'],
        description:` <p>Self-hosted server which I use or have used for the following services:</p>
        <ul>
            <li>VPN: To access my home network and to encrypt my traffic while on public networks.</li>
            <li>Webserver: runs Apache, PHP and MariaDB. Useful for hosting Wordpress websites.</li>
            <li>LVM (Logical Volume Manager): used to combine old HDDs into large units.</li>
            <li>Online File Server</li>
            <li>Backup storage</li>
            <li>DDNS: To point my domain adress(es) to my server even if it has a dynamic IP.</li>
        </ul>
        <p>It runs on Ubuntu Server. It was originally on a Raspberry Pi but nowadays I use a headless desktop PC built from spare parts.</p>`
    },

    {
        title: "Capacitance meter",
        images: ["img/pf/Capacitance meter/Capacitance meter.jpg"],
        tags: ['Hobby', 'Arduino', 'Electronics', 'C++'],
        description:`<p>Simple tool to calculate the capacity of unmarked capacitors. I needed it because I salvage many capacitors from old appliances.</p>`
    },

    {
        title: "CNC machine design",
        images: ["img/pf/CNC/CNC.jpg", "img/pf/CNC/x-axis.jpg", "img/pf/CNC/HotWire.jpg", "img/pf/CNC/Box.jpg"],
        tags: ['Academic', 'SolidWorks'],
        description:`<p>Design of a multi-function CNC machine that I did with four other people for an MSc in Mechatronics. Among other objectives, this machine had to be able to be converted to perform these functions:</p>
        <ul>
            <li>Milling</li>
            <li>Laser engraving</li>
            <li>Drawing with a pen tool</li>
            <li>Painting with an air brush</li>
            <li>Cutting with a hot wire (by attaching a second machine in vertical position)</li>
        </ul>
        <p>Apart from a basic 3D design, the project included tasks such as a market study, alternatives comparison, design brainstorming, forces analysis, tool geometry design, motors selection, etc.</p>`
    },

    {
        title: "Website for Airsoft DIY projects",
        images: ["img/pf/AirsoftDIY/airsoftdiy_scrnsht.png"],
        tags: ['Hobby', 'WebDev', 'Wordpress'],
        description:`<p>Blog featuring many DIY projects for airsoft enthusiasts. While I no longer practice it, I still have many projects and knowledge to write a good amount of posts.</p>
        <p>Some of these projects are personal, and they are shown as a full tutorial. Others are random internet finds, and they are shown as articles with proper attribution.</p>
        <p>The website has been developed in WordPress, with slight modifications in the visual theme and many professional practices (SEO, analytics, proper backup, media organization…).</p>`,
        link: "https://airsoftdiy.com"
    },

    {
        title: "Airsoft Claymore - 3D printed Chassis",
        images: ["img/pf/Airsoft Claymore/Front.jpg", "img/pf/Airsoft Claymore/Front open.jpg", "img/pf/Airsoft Claymore/Back.jpg",
                 "img/pf/Airsoft Claymore/Back open.jpg", "img/pf/Airsoft Claymore/3D exploded.png", "img/pf/Airsoft Claymore/3D Front.png",
                 "img/pf/Airsoft Claymore/3D Front open.png", "img/pf/Airsoft Claymore/3D Back open.png"],
        tags: ['Hobby', 'SolidWorks', '3D printing'],
        description:`<p>Spring-loaded airsoft trap with autonomous movement detection and remote control. In an Airsoft match, when a member of the opposite team walks in front of the trap, the front panel opens and dozens of plastic balls are shot forwards, at which point he is eliminated from the game.<p>
        <p>It consists of a box with a double mouse trap mechanism. The entire body is 3D printed except for wood bars which give it structural integrity against the strong springs.</p>
        <p>The device is 100% functional and was used successfully in real matches.</p>
        <p>The electronic board and its features are described in another project.</p>`,
        link: "https://github.com/Tyronnosaurus/diy-airsoft-claymore"
    },

    {
        title: "Airsoft Claymore - Electronics board",
        images: ["img/pf/Airsoft Claymore PCB/pcb-v3-2.png", "img/pf/Airsoft Claymore PCB/MountedPCB.jpg", "img/pf/Airsoft Claymore/Back open.jpg",
                 "img/pf/Airsoft Claymore PCB/pcb-top.png", "img/pf/Airsoft Claymore PCB/remote.jpg"],
        tags: ['Hobby', 'C++', 'Electronics', 'Arduino', 'Altium'],
        description:`<p>Electronic controller for the 3D printed Airsoft Claymore (described in another project). It has the following features:</p>
        <ul>
            <li>Autonomous mode with motion sensor.</li>
            <li>Can be controlled remotely to enable/disable the motion sensor, fire manually, or check range in case the user is hidden very far.</li>
            <li>Can be controlled with onboard button in case the remote is lost or has no battery.</li>
            <li>Many battery saving techniques. Consumes less than 10 μA while in use.</li>
            <li>Light & sound feedback.</li>
            <li>SPI programmer connector.</li>
        </ul>
        <p>It was developed to improve my design skills and practice with Altium Designer.</p>
        <p>The device is 100% functional and was used successfully in real matches.</p>`,
        link: "https://github.com/Tyronnosaurus/diy-airsoft-claymore"
    },

    {
        title: "Semi-automated assembly line",
        images: ["img/pf/Claymore production line/production line.png"],
        tags: ['Academic', 'SolidWorks', 'PLC'],
        description:`<p>This project was developed as the final project for an MSc in Mechatronics. It includes:</p>
        <ul>
            <li>Redesign of an existing product to conform to manufacturing standards.</li>
            <li>3D design of the assembly line.</li>
            <li>Control system of sensors & actuators using Schneider's Unity Pro XL environment for PLC control with Ladder and GRAFCET.</li>
        </ul>`
    },

    {
        title: "Modular security system",
        images: ["img/pf/Security system/20150531_223234.jpg", "img/pf/Security system/20150530_023521.jpg", "img/pf/Security system/20150517_153558.jpg",
                 "img/pf/Security system/20150529_115214.jpg", "img/pf/Security system/20150526_001551.jpg"],
        tags: ['Academic', 'Arduino', 'C++', '3D printing', 'Electronics'],
        description:`<p>Set of five functional devices to protect homes and business against robberies. The system is scalable and makes use of various technologies: wireless RF communications, PIR movement detection, RFID identification, etc. It contains approximately 3000 lines of C++ code written by me, plus many public libraries.<p>
        <p>While all modules are in their breadboard phase, one of them has been redesigned as a soldered circuit inside a 3D printed enclosure, making it adequate for real use.</p>
        <p>It was presented as my final engineering project and earned a 10/10 grade.</p>`
    },

    {
        title: "Buck converter for laptop batteries",
        images: ["img/pf/Buck converter/0.jpg"],
        tags: ['Academic', 'Electronics'],
        description:`<p>Driver based on a DC-DC Buck converter. It reduces the unreliable 12 V of a typical laptop battery to a stable 5 V. It works at a wide range of currents (1 to 10 A).</p>
        <p>This project was presented in a power electronics class.</p>`
    },

    {
        title: "ISP breakout board",
        images: ["img/pf/ISP breakout board/20151020_192511.jpg", "img/pf/ISP breakout board/20151020_192435.jpg", "img/pf/ISP breakout board/gerber.png"],
        tags: ['Hobby', 'Electronics'],
        description:`<p>PCB that makes it easy to program standalone ATtiny44, 45, 84 and 85 chips with an ISP programmer.</p>
        <p>It was designed from scratch and ordered from a fabhouse in order to practice designing PCBs and to help in future projects.</p>`
    },

    {
        title: "Motion detection alarm",
        images: ["img/pf/Motion detection alarm/1.jpg", "img/pf/Motion detection alarm/2.jpg", "img/pf/Motion detection alarm/pcb.png"],
        tags: ['Hobby', 'Electronics', 'C++', 'Arduino'],
        description:`<p>Small battery powered PIR sensor for my front door. It can run for more than one year on three AA batteries. Upon detection, it triggers a loud buzzer and can send an RF signal to other modules.<p>
        <p>This project was made to practice these skills:</p>
        <ul>
            <li>Converting an Arduino project to a standalone board</li>
            <li>PCB design and manufacturing</li>
            <li>Low power design</li>
        </ul>`
    },

    {
        title: "Keychain mass production machine",
        images: ["img/pf/Keychain machine/0.jpg", "img/pf/Keychain machine/1.jpg", "img/pf/Keychain machine/2.jpg", "img/pf/Keychain machine/3.jpg",
                 "img/pf/Keychain machine/4.jpg", "img/pf/Keychain machine/5.jpg"],
        tags: ['Academic'],
        description:`<p>Station with many pneumatic actuators that stamped, drilled and burned wood pieces into the desired design.<p>
        <p>It was presented as my final high-school project, and earned a 10/10 qualification. Most of the design was done by one of my teachers, and I built it and prepared the full documentation.</p>
        <p>See more in <a href="https://www.youtube.com/watch?v=PdXk931gd-0">this video</a>.</p>`
    },

    {
        title: "PID line follower",
        images: ["img/pf/PID line follower/1.jpg", "img/pf/PID line follower/2.jpg", "img/pf/PID line follower/3.jpg", "img/pf/PID line follower/4.gif"],
        tags: ['Academic', 'C++', 'Arduino', 'Electronics'],
        description:`<p>Small car prepared to follow a line on the floor. It uses a closed loop system to improve its performance. The PID parameters can be set during runtime thanks to a remote control and an onboard LCD screen.<p>
        <p>It was developed in a control systems class. The project only required a Lego Mindstorm prototype, but I decided to use generic components I owned in order to have a bigger scope. The final test was a race based championship with my peers, in which it got first place and earned a 10/10 qualification.</p>`
    },

    {
        title: "RC car with differential steering",
        images: ["img/pf/RC car/1.jpg"],
        tags: ['Hobby', 'C++', 'Arduino', 'Electronics'],
        description:`<p>Differential steering, also known as skid steering, is accomplished by independently controlling the speed of the right and left wheels. This gives the vehicle a better maneuverability as it can turn around in place.</p>
        <p>This car is essentially a wheeled platform for future accessories.</p>
        <p>This project was built for fun.</p>`
    },

    {
        title: "Remote controlled ball launcher",
        images: ["img/pf/Ball launcher/balllauncher.png", "img/pf/Ball launcher/launchermechanism.png"],
        tags: ['Hobby', 'SolidWorks'],
        description:`<p>This is a design for a semiautomatic ball launcher that can be attached to a remotely controlled car I had previously developed.</p>
        <p>The rack and pinion mechanism with missing teeth, typical of airsoft gearboxes, retracts the platform and compresses the springs. When the last tooth is reached, the compression is released and the ball propelled. The microswitch stops the motor after a revolution is completed.</p>`
    },

    {
        title: "Seamless highway incorporation protocol for self-driving cars",
        images: ["img/pf/Incorporation protocol/track.jpg"],
        tags: ['Hobby', 'C++', 'Arduino'],
        description:`<p>A protocol which would allow an autonomous car to enter a highway without the need of a direct line of sight of incoming traffic.</p>
        <p>The car outside the highway first requests data about the position and speed of cars in the right lane. This data is provided either by a sensor network on the road or directly by the cars themselves. Then, the incorporating car calculates the probability of causing an accident and accelerates or slows down accordingly.</p>
        <p>This system is mostly intended for autonomous cars, but the relayed information could still be a useful cue for human drivers in low visibility conditions.</p>
        <p>This project was made during a hackathon by me and two other participants.</p>`
    },

    {
        title: "Remotely operated surgical robot",
        images: ["img/pf/Surgical robot/0.jpg"],
        tags: ['Hobby'],
        description:`<p>Robot capable of moving a tool according to instructions sent over the internet.</p>
        <p>It was a 4 member team's entry into a robotics competition to design an upscaled prototype of a robot capable of performing eye surgery. It won first place.</p>`
    },

    {
        title: "7-segment multiplexed clock",
        images: ["img/pf/7 segment clock/0.jpg", "img/pf/7 segment clock/1.jpg", "img/pf/7 segment clock/2.jpg"],
        tags: ['Hobby', 'C++', 'Arduino', 'Electronics'],
        description:`<p>A clock that makes use of multiplexing with shift registers, and stores the time in an RTC.<p>
        <p>This project was made for fun.</p>`
    },

    {
        title: "Recycled laptop monitor",
        images: ["img/pf/Recycled monitor/0.jpg", "img/pf/Recycled monitor/1.jpg", "img/pf/Recycled monitor/2.jpg"],
        tags: ['Hobby', '3D printing', 'SolidWorks'],
        description:`<p>Secondary PC screen recycled from a broken laptop. It has two 3D printed bases at 0º and 15º orientations for better visibility. Additionally, the electronic boards are mounted on 3D printed enclosures that protect the user from the high voltage needed to drive the screen's fluorescent backlight.<p>
        <p>This project was made to reduce electronic waste and for fun.</p>`
    },

    {
        title: "Access control system based on facial recognition",
        images: ["img/pf/Access facial recognition/0.jpg"],
        tags: ['Hobby', 'Arduino', 'Electronics', '3D printing'],
        description:`<p>Prototype made with an Intel Joule board (to monitor the camera and recognize faces) and an Arduino 101 (to control sensors and actuators).</p>
        <p>It was developed in 30 hours during the 2016 Barcelona IoT Solutions World Congress Hackathon by me and three other participants.</p>`
    },

    {
        title: "EMF meter",
        images: ["img/pf/EMF meter/0.jpg", "img/pf/EMF meter/1.jpg"],
        tags: ['Hobby', 'C++', 'Arduino', 'Electronics'],
        description:`<p>Electromagnetic fields detector. It reacts to screens, AC appliances and cables, etc.</p>
        <p>It was made for fun by making a few modifications to <a href="http://www.instructables.com/id/Attiny-45-EMF-Sensor/">this tutorial</a>.</p>`
    },
    
    {
        title: "'Here Be Dragons' minigame",
        images: ["img/pf/Here be dragons/0.png", "img/pf/Here be dragons/1.jpg"],
        tags: ['Academic', 'GameDev'],
        description:`<p>Tile-based action game using Flash.</p>
        <p>It was developed in a programming class by me and another student, and earned a 9/10 qualification.</p>
        <p>You can watch the trailer I made on the following link:</p>`,
        link: "https://www.youtube.com/watch?v=L3Q6C7F_F30"
    },

    {
        title: "Dummy sound grenade for airsoft",
        images: ["img/pf/Sound grenade/0.jpg", "img/pf/Sound grenade/1.jpg", "img/pf/Sound grenade/2.jpg"],
        tags: ['Hobby', 'C++', 'Arduino', 'Electronics', 'SolidWorks', '3D printing'],
        description:`<p>A device for paintball and airsoft players. Commercial grenades have to be refilled with CO2 capsules every time they are used. This electric model aims to be more economical since it can be used hundreds of times on a single coin cell charge.</p>
        <p>It was developed to test whether or not I could make a commercial product. Because of this, the design was reworked many times in order to make the enclosure resistant to typical use, and also ensure the electronics inside were reliable.</p>`
    },

    {
        title: "Portfolio",
        images: ["img/pf/Portfolio/0.jpg", "img/pf/Portfolio/1.jpg"],
        tags: ['Hobby', 'WebDev', 'HTML', 'CSS', 'Javascript', 'Bootstrap'],
        description:`<p>A website where I showcase my projects. It allows filtering by tags, and shows a popup with more info whenever an entry is clicked.</p>
        <p>Done with HTML, CSS, a bit of Javascript, and some Bootstrap features such as Modal and Carousel.</p>`,
        link: "https://github.com/Tyronnosaurus/portfolio"
    },
    
    {
        title: "Safety goggles defogger",
        images: ["img/pf/Defogger/0.jpg", "img/pf/Defogger/1.jpg"],
        tags: ['Hobby', 'SolidWorks', '3D printing', 'Electronics'],
        description:`<p>Airsoft players must always wear safety goggles. This, combined with the constant sweating, means that fogged goggles is a constant problem.</p>
        <p>I developed two defoggers which, at the press of a button, force air circulation inside the goggles to quickly defog them in about 5 seconds.</p>
        <ul>
            <li>Handheld version: can be carried in a pocket and must be pressed on the forehead when needed.</li>
            <li>Mounted version: can be attached to the goggles permanently.</li>
        </ul>`
    }
    

]






function buildPortfolio(){

    var pfDiv = document.getElementById("portfolio");  // Portfolio section
    var pfGrid = document.getElementById("pf-grid");   // Portfolio section -> Grid

    for (var i=0; i<data.length; i++) {
        newDiv = buildPortfolioCard(i);
        pfGrid.appendChild(newDiv); // Add the created element to the DOM
    }

}


// Builds the card that appears in the grid of cards
function buildPortfolioCard(i){
    
    var itemData = data[i];

    var newDiv = document.createElement("li");  // Each portfolio entry is a li element
    newDiv.classList.add("pf-item");
    newDiv.setAttribute("data-bs-toggle", "modal");
    newDiv.setAttribute("data-bs-target", "#pf-modal");

    // Main image
    var img = new Image();
    img.src = itemData.images[0];   // First image is the cover image
    newDiv.appendChild(img);

    // Title
    var title = document.createElement("h4");
    var titleText = document.createTextNode(itemData.title);
    title.appendChild(titleText);
    newDiv.appendChild(title);

    // Tags
    var tags = document.createElement("div");
    tags.classList.add("tags");
    tags.textContent = itemData.tags.join(',');
    newDiv.appendChild(tags);

    // There's a single Modal in our html. Every time a portfolio item is clicked, the modal is filled with the relevant data and shown
    newDiv.onclick = () => {
        fillPortfolioModal(i);
    }


    return(newDiv);
}



// Replace the contents of the modal with those of the selected portfolio item
function fillPortfolioModal(i){

    var itemData = data[i];

    var modal = document.getElementById("pf-modal");

    // Title
    var modalHeader = modal.getElementsByClassName("modal-title")[0];
    modalHeader.textContent = itemData.title;


    // Slides
    var slides = modal.getElementsByClassName("carousel-inner")[0];

    removeAllChildNodes(slides); //Clean any previous children

    for (var i=0; i<itemData.images.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("carousel-item");
        if (i==0) newDiv.classList.add("active");
        slides.appendChild(newDiv);

        var img = new Image();
        img.classList.add("d-block","w-100")
        img.src = itemData.images[i];
        newDiv.appendChild(img);
    }


    // Thumbnails
    var thumbnails = modal.getElementsByClassName("carousel-indicators")[0];

    removeAllChildNodes(thumbnails); //Clean any previous children

    for (var i=0; i<itemData.images.length; i++) {
        var newLi = document.createElement("li");
        newLi.classList.add("list-inline-item");
        if (i==0) newLi.classList.add("active");
        thumbnails.appendChild(newLi);

        var img = new Image();
        img.setAttribute("data-bs-slide-to", i);
        img.setAttribute("data-bs-target", "#pf-carousel")
        img.src = itemData.images[i];
        newLi.appendChild(img);
    }

    // Description
    var modalDescription = modal.getElementsByClassName('description')[0];
    modalDescription.innerHTML = itemData.description;

    // Link
    var modalLinkDiv = modal.getElementsByClassName('linkdiv')[0];
    removeAllChildNodes(modalLinkDiv);  // Remove previously created link

    if (itemData.link){ // If the portfolio item has a link, create an <a> element and append it inside the link div
        var link = document.createElement("a");
        link.classList.add("link");
        link.setAttribute("href", itemData.link);
        link.setAttribute("target", "_blank");  // So that it opens in a new tab
        link.innerHTML = "See more";

        modalLinkDiv.appendChild(link);
    }

    // Tags
    if (itemData.tags){
        var modalTags = modal.getElementsByClassName('tags')[0];
        modalTags.innerHTML = "Tags: " + itemData.tags.join(', ');
    }

}



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}