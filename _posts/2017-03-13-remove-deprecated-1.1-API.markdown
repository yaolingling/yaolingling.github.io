---
layout: default
title: Remove Deprecated 1.1 API
modal-id: 3
date: 2017-03-13
img: 
icon: icons8.com-Remove-Property-64.png
alt: 
project-date: 2017 Mar
#client: Start Bootstrap
#category: Web Development
description: <b>1.1 API and legacy event notification format won't be supported in the 2.0.0 release.</b> <br><br> Maybe you've known that deprecated 1.1 API will be not supported in the RackHD 2.0.0 release. There are situations where continuing to maintain the deprecated API creates too high a burden for both API developers and clients&#58 the code bloat of keeping old implementations, the added complexity of multiple redundant APIs, etc. <br>  <br> Together with deprecated 1.1 API not supported, legacy RackHD asynchronous event notification payload format will also not be supported in the 2.0.0 release. some information FYR&#58 <br>  <ul align="left"> <li>the new format and more details are described at <a href="http://rackhd.readthedocs.io/en/latest/rackhd/event_notification.html"><font size="3"><u>event_notification</u><font></a> </li> <li>If you're using RackHD 1.x.x release or older versions, it won't be impacted.</li> <li>If you want to change to use 2.0.0 release, a 'version' field could be used for event notification backward compatibility in the future.</li></ul> <br /> <br /> <p align="left"> This change will take effect in RackHD 2.0.0 release. </p>

---