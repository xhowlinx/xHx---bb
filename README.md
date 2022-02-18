# Meat Me At the N00dle Shack!

A collection of scripts that i've scribed for the game Bitburner(https://danielyxie.github.io/bitburner/).

the first one ... a plea for help to write a proper server update script....
Meat me at the N00dle Shack!!
a 4.20GB bitburner starting script/mini-game/?challenge?.

Challange:
  -correct a script('upserv.js') to automate the incremental purchase of servers to max ram and deploy hacking script on them before the incrulded broken version freezes the home server.
  (about 45 min.)

Rules:
  -player must buy all home ram upgrades and all darkweb port hacking tools in the order they become financially available.
  -working 'upserv.js'must be included as a file to write from 'MmatNS.js'.
  -completed 'upserv.js' needs to be under 10.20GB.
  
Timeline:
  -player action  -total elasped time;
  
  -purchase Tor - 4 min;
  -buy brute - 9 min;
  -upgrade home ram- 12 min;
  -buy FTPCrack - 17 min;
  -upgrade home ram - 24 min.;
  -buy relaySMTP - 32 min.;
  -upgrade home ram - 40 min.;
  
 from this point, once you earn 11 million$(about 46 min. from start if the upgrades were followed), the script 'upserv.js' will run and either crash the 'home' system, or, if you have resolved the issue, everything will run smoothly through the first set of milestones/augmentations.
  times up!

My solution is file walkthrough.js

Turns out, that was NOT my solution.
the file xHx-autoservers.js is the answer.
however,
i did not enjoy the problem of cash flow while trying to still buy 'hacks' and ram upgrades, as suggested by the 'monitors'.
while testing a "stop upgrade?" button, i switched everthing to only hack n00dles. the time implementation of new servers by using the hack command as a timer, resulted in a 2gb basic hack that always had n00dles with a coming grow from a positive balance, creating an immortal server.
that resulted as file 'rammin-n00dles.js

to better understand the deaths, i made this file
deathMonitor.js

now i am trying for a flip/flop 100% - 0% - 100% for every tick script. will post soon.


