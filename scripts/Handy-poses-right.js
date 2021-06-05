
//  Copyright © 2020–2021 Stewart Smith. See LICENSE for details.




//  Oculus Quest has trouble with finger overlaps 
//  as illustrated by American Sign Language (ASL)
//  for M, N, R, T, X etc.

const poses = [






	    //////////////
	   //          //
	  //   Misc   //
	 //          //
	//////////////


	{"names":["rest"],"handedness":"right","handyRevision":5,"time":1621881514856,"headPosition":[-64,-391,45],"headRotation":[-0.11318427621538905,-0.1625642803168944,-0.006275592560091326,0.9801646728407021],"jointPositions":[[0,0,0],[-27,-20,-37],[-41,-42,-57],[-42,-62,-84],[-46,-79,-101],[-16,-9,-41],[-24,-7,-96],[-25,-31,-125],[-24,-54,-133],[-22,-77,-136],[-3,-9,-41],[-2,-3,-96],[3,-26,-131],[4,-52,-142],[3,-77,-143],[8,-9,-38],[17,-7,-89],[25,-29,-120],[26,-53,-132],[21,-77,-132],[23,-9,-34],[35,-14,-78],[40,-36,-98],[40,-56,-104],[35,-76,-110]],"digitTipPositions":[[-46,-79,-101],[-22,-77,-136],[3,-77,-143],[21,-77,-132],[35,-76,-110]]},

	{"names":["flat"],"handedness":"right","handyRevision":5,"time":1622838762796,"headPosition":[158,-222,108],"headRotation":[-0.1172082908243403,0.44275682814448214,0.08105469925532659,0.8852449738878424],"jointPositions":[[0,0,0],[-27,-20,-37],[-42,-25,-65],[-41,-31,-98],[-34,-37,-121],[-16,-9,-41],[-24,-7,-96],[-15,-21,-130],[-9,-32,-151],[-2,-40,-171],[-3,-9,-41],[-2,-3,-96],[7,-21,-134],[12,-34,-157],[19,-41,-180],[8,-9,-38],[17,-7,-89],[24,-22,-124],[28,-33,-148],[32,-41,-170],[23,-9,-34],[35,-14,-78],[37,-22,-107],[41,-28,-126],[41,-35,-147]],"digitTipPositions":[[-34,-37,-121],[-2,-40,-171],[19,-41,-180],[32,-41,-170],[41,-35,-147]]},

	{"names":["flare"],"handedness":"right","handyRevision":5,"time":1621881545752,"headPosition":[-119,-335,-149],"headRotation":[-0.042908171671413545,-0.0891097255155344,0.02898383397506922,0.9946749633099781],"jointPositions":[[0,0,0],[-32,-13,-33],[-55,-16,-55],[-77,-17,-81],[-99,-15,-92],[-16,-9,-41],[-24,-7,-96],[-33,-2,-132],[-38,1,-156],[-42,8,-177],[-3,-9,-41],[-2,-3,-96],[3,2,-138],[6,6,-165],[9,14,-188],[8,-9,-38],[17,-7,-89],[28,0,-126],[36,4,-151],[42,11,-173],[23,-9,-34],[35,-14,-78],[54,-6,-101],[67,0,-115],[80,8,-131]],"digitTipPositions":[[-99,-15,-92],[-42,8,-177],[9,14,-188],[42,11,-173],[80,8,-131]]},

	{"names":["devil","bull"],"handedness":"right","handyRevision":5,"time":1621881578193,"headPosition":[-125,-290,-121],"headRotation":[0.015154962337995587,-0.2145673568118638,0.01317463214916269,0.9765027420731681],"jointPositions":[[0,0,0],[-23,-24,-38],[-30,-47,-60],[-7,-59,-82],[15,-64,-92],[-16,-9,-41],[-24,-7,-96],[-21,-12,-134],[-20,-19,-157],[-16,-22,-179],[-3,-9,-41],[-2,-3,-96],[1,-42,-111],[-5,-50,-85],[-11,-30,-71],[8,-9,-38],[17,-7,-89],[17,-44,-100],[8,-59,-80],[-1,-50,-59],[23,-9,-34],[35,-14,-78],[42,-25,-106],[49,-32,-123],[55,-37,-144]],"digitTipPositions":[[15,-64,-92],[-16,-22,-179],[-11,-30,-71],[-1,-50,-59],[55,-37,-144]]},

	{"names":["love"],"handedness":"right","handyRevision":5,"time":1621881607628,"headPosition":[-119,-304,-80],"headRotation":[-0.003695033792621759,-0.1937612061195965,-0.0058891848113515255,0.9810240869633209],"jointPositions":[[0,0,0],[-32,-12,-32],[-57,-18,-52],[-82,-21,-75],[-104,-22,-86],[-16,-9,-41],[-24,-7,-96],[-26,-18,-132],[-27,-28,-154],[-26,-33,-176],[-3,-9,-41],[-2,-3,-96],[-2,-44,-106],[-4,-47,-78],[-7,-30,-60],[8,-9,-38],[17,-7,-89],[15,-43,-101],[9,-54,-77],[5,-42,-57],[23,-9,-34],[35,-14,-78],[39,-30,-104],[43,-41,-121],[46,-49,-140]],"digitTipPositions":[[-104,-22,-86],[-26,-33,-176],[-7,-30,-60],[5,-42,-57],[46,-49,-140]]},

	{"names":["vulcan","🖖"],"handedness":"right","handyRevision":5,"time":1621881629782,"headPosition":[-47,-285,-137],"headRotation":[-0.00788533602704356,-0.17753875000023764,0.03477551031615197,0.9834675783171185],"jointPositions":[[0,0,0],[-32,-13,-33],[-55,-18,-55],[-77,-20,-80],[-98,-21,-93],[-16,-9,-41],[-24,-7,-96],[-27,-10,-134],[-28,-21,-155],[-28,-28,-177],[-3,-9,-41],[-2,-3,-96],[-8,-17,-136],[-12,-26,-161],[-14,-29,-186],[8,-9,-38],[17,-7,-89],[29,-16,-125],[36,-26,-148],[41,-36,-170],[23,-9,-34],[35,-14,-78],[46,-17,-107],[54,-20,-125],[61,-24,-145]],"digitTipPositions":[[-98,-21,-93],[-28,-28,-177],[-14,-29,-186],[41,-36,-170],[61,-24,-145]]},

	{"names":["vulcan inverse"],"handedness":"right","handyRevision":5,"time":1621881661054,"headPosition":[-59,-334,-130],"headRotation":[0.017199811443081248,-0.20500198528557165,0.006698643820019644,0.9785874924887487],"jointPositions":[[0,0,0],[-32,-12,-32],[-57,-21,-50],[-82,-28,-72],[-106,-30,-79],[-16,-9,-41],[-24,-7,-96],[-34,-9,-132],[-41,-15,-155],[-45,-16,-177],[-3,-9,-41],[-2,-3,-96],[9,-6,-137],[16,-10,-163],[24,-7,-187],[8,-9,-38],[17,-7,-89],[29,-6,-126],[38,-7,-151],[45,-4,-174],[23,-9,-34],[35,-14,-78],[55,-13,-101],[69,-12,-116],[83,-8,-132]],"digitTipPositions":[[-106,-30,-79],[-45,-16,-177],[24,-7,-187],[45,-4,-174],[83,-8,-132]]},

	{"names":["bird","middle finger","🖕"],"handedness":"right","handyRevision":5,"time":1621881686130,"headPosition":[29,-350,-7],"headRotation":[-0.0004854304158765525,-0.1877960176241366,0.0020061913749466315,0.982205882346267],"jointPositions":[[0,0,0],[-25,-22,-37],[-36,-42,-60],[-14,-55,-83],[9,-58,-90],[-16,-9,-41],[-24,-7,-96],[-21,-44,-105],[-20,-43,-81],[-21,-24,-69],[-3,-9,-41],[-2,-3,-96],[-3,-31,-128],[-4,-50,-148],[-4,-63,-169],[8,-9,-38],[17,-7,-89],[16,-45,-96],[7,-48,-71],[2,-29,-56],[23,-9,-34],[35,-14,-78],[28,-43,-83],[19,-47,-65],[12,-34,-49]],"digitTipPositions":[[9,-58,-90],[-21,-24,-69],[-4,-63,-169],[2,-29,-56],[12,-34,-49]]},

	{"names":["pinch"],"handedness":"right","handyRevision":5,"time":1621881712711,"headPosition":[-305,-136,-110],"headRotation":[-0.06083174371449158,-0.19810562171298635,-0.012269519211855118,0.9782142508052221],"jointPositions":[[0,0,0],[-21,-25,-38],[-24,-51,-57],[-15,-74,-81],[-12,-93,-96],[-16,-9,-41],[-24,-7,-96],[-16,-43,-105],[-14,-67,-103],[-11,-90,-101],[-3,-9,-41],[-2,-3,-96],[-1,-45,-104],[-5,-51,-78],[-10,-32,-63],[8,-9,-38],[17,-7,-89],[14,-45,-91],[7,-51,-66],[1,-36,-48],[23,-9,-34],[35,-14,-78],[26,-43,-77],[18,-47,-59],[10,-35,-42]],"digitTipPositions":[[-12,-93,-96],[-11,-90,-101],[-10,-32,-63],[1,-36,-48],[10,-35,-42]]},

	{"names":["grab"],"handedness":"right","handyRevision":5,"time":1621881737885,"headPosition":[-75,-302,-135],"headRotation":[-0.06681427167873569,-0.1353902095223235,0.004201903876012201,0.9885280405653611],"jointPositions":[[0,0,0],[-25,-22,-37],[-36,-44,-59],[-36,-63,-86],[-23,-76,-104],[-16,-9,-41],[-24,-7,-96],[-23,-30,-127],[-22,-53,-120],[-20,-72,-108],[-3,-9,-41],[-2,-3,-96],[5,-26,-131],[2,-51,-118],[-5,-60,-96],[8,-9,-38],[17,-7,-89],[24,-34,-115],[13,-46,-94],[4,-38,-73],[23,-9,-34],[35,-14,-78],[34,-41,-92],[22,-48,-77],[10,-41,-60]],"digitTipPositions":[[-23,-76,-104],[-20,-72,-108],[-5,-60,-96],[4,-38,-73],[10,-41,-60]]},

	{"names":["crook only thumb"],"handedness":"right","handyRevision":5,"time":1621881768169,"headPosition":[-45,-354,-97],"headRotation":[-0.05281256618128167,-0.20128351515725584,0.016699590289580905,0.9779656952298778],"jointPositions":[[0,0,0],[-31,-14,-33],[-54,-31,-49],[-47,-52,-74],[-26,-60,-85],[-16,-9,-41],[-24,-7,-96],[-28,-18,-132],[-30,-28,-154],[-31,-36,-175],[-3,-9,-41],[-2,-3,-96],[7,-13,-136],[13,-23,-161],[19,-29,-185],[8,-9,-38],[17,-7,-89],[31,-11,-125],[41,-17,-149],[48,-21,-172],[23,-9,-34],[35,-14,-78],[54,-13,-102],[68,-16,-117],[81,-18,-134]],"digitTipPositions":[[-26,-60,-85],[-31,-36,-175],[19,-29,-185],[48,-21,-172],[81,-18,-134]]},

	{"names":["crook only index"],"handedness":"right","handyRevision":5,"time":1621881789208,"headPosition":[-102,-330,-84],"headRotation":[0.009144924780874994,-0.23451003158022074,0.013531559764024191,0.971976497706242],"jointPositions":[[0,0,0],[-31,-14,-34],[-54,-25,-54],[-75,-33,-80],[-97,-37,-90],[-16,-9,-41],[-24,-7,-96],[-19,-17,-132],[-20,-40,-123],[-21,-51,-103],[-3,-9,-41],[-2,-3,-96],[10,-1,-137],[17,-14,-161],[24,-20,-184],[8,-9,-38],[17,-7,-89],[32,-2,-124],[42,-5,-149],[49,-9,-172],[23,-9,-34],[35,-14,-78],[55,-10,-101],[69,-10,-116],[82,-7,-133]],"digitTipPositions":[[-97,-37,-90],[-21,-51,-103],[24,-20,-184],[49,-9,-172],[82,-7,-133]]},

	{"names":["crook only middle"],"handedness":"right","handyRevision":5,"time":1621881809592,"headPosition":[-108,-303,-104],"headRotation":[0.021550719084558165,-0.2641360591010682,0.017785397286299166,0.9640805918183769],"jointPositions":[[0,0,0],[-32,-13,-33],[-56,-21,-53],[-78,-26,-78],[-100,-28,-88],[-16,-9,-41],[-24,-7,-96],[-33,-8,-133],[-38,-17,-154],[-42,-22,-176],[-3,-9,-41],[-2,-3,-96],[9,-7,-137],[6,-34,-131],[-1,-50,-113],[8,-9,-38],[17,-7,-89],[33,-7,-125],[42,-13,-149],[48,-24,-170],[23,-9,-34],[35,-14,-78],[57,-9,-99],[73,-9,-112],[88,-6,-127]],"digitTipPositions":[[-100,-28,-88],[-42,-22,-176],[-1,-50,-113],[48,-24,-170],[88,-6,-127]]},

	{"names":["crook only ring"],"handedness":"right","handyRevision":5,"time":1621881827288,"headPosition":[-152,-291,-100],"headRotation":[0.041323393072950305,-0.25220391221424776,0.01942511734346915,0.9665962065144839],"jointPositions":[[0,0,0],[-32,-12,-33],[-56,-18,-54],[-79,-20,-79],[-101,-19,-90],[-16,-9,-41],[-24,-7,-96],[-32,-6,-133],[-37,-9,-156],[-41,-8,-179],[-3,-9,-41],[-2,-3,-96],[1,-3,-138],[3,-7,-166],[6,-5,-190],[8,-9,-38],[17,-7,-89],[27,-17,-125],[21,-43,-119],[10,-48,-98],[23,-9,-34],[35,-14,-78],[55,-11,-101],[68,-13,-116],[82,-12,-134]],"digitTipPositions":[[-101,-19,-90],[-41,-8,-179],[6,-5,-190],[10,-48,-98],[82,-12,-134]]},

	{"names":["crook only pinky"],"handedness":"right","handyRevision":5,"time":1621881858744,"headPosition":[-135,-284,-123],"headRotation":[0.005733437519730562,-0.2159877088253948,0.014911793850178559,0.9762653714762984],"jointPositions":[[0,0,0],[-32,-12,-33],[-56,-17,-54],[-77,-19,-80],[-99,-18,-91],[-16,-9,-41],[-24,-7,-96],[-29,-7,-134],[-32,-12,-157],[-34,-12,-179],[-3,-9,-41],[-2,-3,-96],[1,-2,-138],[4,-4,-166],[7,1,-190],[8,-9,-38],[17,-7,-89],[30,-10,-126],[37,-19,-149],[39,-35,-168],[23,-9,-34],[35,-14,-78],[52,-15,-103],[46,-35,-106],[32,-51,-100]],"digitTipPositions":[[-99,-18,-91],[-34,-12,-179],[7,1,-190],[39,-35,-168],[32,-51,-100]]},

	{"names":["thumb","thumb up","thumb down","👍","👎"],"handedness":"right","handyRevision":5,"time":1621881942689,"headPosition":[-248,-272,18],"headRotation":[-0.11001935349063505,-0.1617075878223402,-0.002788315921741593,0.9806827306290092],"jointPositions":[[0,0,0],[-32,-13,-33],[-54,-15,-56],[-75,-14,-83],[-95,-12,-97],[-16,-9,-41],[-24,-7,-96],[-20,-45,-102],[-21,-41,-78],[-23,-20,-69],[-3,-9,-41],[-2,-3,-96],[-2,-45,-97],[-5,-42,-70],[-9,-19,-61],[8,-9,-38],[17,-7,-89],[14,-45,-89],[10,-41,-63],[9,-17,-57],[23,-9,-34],[35,-14,-78],[26,-43,-81],[23,-41,-61],[23,-21,-52]],"digitTipPositions":[[-95,-12,-97],[-23,-20,-69],[-9,-19,-61],[9,-17,-57],[23,-21,-52]]},

	{"names":["walk index down"],"handedness":"right","handyRevision":5,"time":1622838817238,"headPosition":[139,-276,-77],"headRotation":[0.04400396843457909,0.39634227956261536,0.07614551298960316,0.913880893128327],"jointPositions":[[0,0,0],[-23,-24,-38],[-32,-43,-62],[-13,-56,-87],[8,-62,-99],[-16,-9,-41],[-24,-7,-96],[-30,-36,-120],[-30,-60,-123],[-28,-82,-125],[-3,-9,-41],[-2,-3,-96],[3,-28,-130],[5,-49,-148],[8,-65,-166],[8,-9,-38],[17,-7,-89],[16,-45,-95],[6,-53,-71],[1,-32,-59],[23,-9,-34],[35,-14,-78],[26,-43,-76],[16,-50,-59],[9,-36,-44]],"digitTipPositions":[[8,-62,-99],[-28,-82,-125],[8,-65,-166],[1,-32,-59],[9,-36,-44]]},
	
	{"names":["walk middle down"],"handedness":"right","handyRevision":5,"time":1622838844155,"headPosition":[-42,-343,-199],"headRotation":[0.09813459168249522,0.3594401540784347,0.11199783218577673,0.9212105127240787],"jointPositions":[[0,0,0],[-23,-24,-38],[-31,-43,-63],[-12,-56,-87],[7,-63,-101],[-16,-9,-41],[-24,-7,-96],[-18,-5,-133],[-14,-6,-157],[-10,-9,-179],[-3,-9,-41],[-2,-3,-96],[3,-35,-124],[5,-61,-133],[8,-81,-147],[8,-9,-38],[17,-7,-89],[16,-45,-95],[6,-52,-71],[0,-35,-55],[23,-9,-34],[35,-14,-78],[27,-43,-80],[18,-53,-64],[11,-41,-47]],"digitTipPositions":[[7,-63,-101],[-10,-9,-179],[8,-81,-147],[0,-35,-55],[11,-41,-47]]},

	//  Note that this pose only contains thumb and index positions.
	//  Right now it’s “too close” to Rest...
	//
	// {"names":["Pinch"],"handedness":"left","handyRevision":4,"time":1597940692048,"headPosition":[-938,-443,-5899],"headRotation":[-3.700743415417188e-17,0,0,1],"jointPositions":[[0,0,0],[36,19,-28],[51,44,-43],[74,68,-39],[90,82,-26],[41,9,-16],[96,7,-24],[114,41,-25],[104,63,-22],[90,80,-17]],"digitTipPositions":[[90,82,-26],[90,80,-17],[177,52,3],[173,36,24],[144,19,65]]},






	    /////////////////////
	   //                 //
	  //   ASL Letters   //
	 //                 //
	/////////////////////


	{"names":["asl a"],"handedness":"right","handyRevision":5,"time":1621882944164,"headPosition":[53,-321,-89],"headRotation":[-0.024134810454782985,-0.26288105009248797,-0.03824814169067881,0.9637676804180307],"jointPositions":[[0,0,0],[-26,-21,-37],[-41,-29,-65],[-40,-37,-98],[-42,-44,-121],[-16,-9,-41],[-24,-7,-96],[-18,-41,-112],[-22,-49,-89],[-26,-38,-70],[-3,-9,-41],[-2,-3,-96],[-1,-45,-102],[-6,-48,-75],[-12,-30,-59],[8,-9,-38],[17,-7,-89],[14,-45,-90],[7,-47,-65],[3,-27,-52],[23,-9,-34],[35,-14,-78],[27,-43,-80],[20,-44,-60],[17,-26,-48]],"digitTipPositions":[[-42,-44,-121],[-26,-38,-70],[-12,-30,-59],[3,-27,-52],[17,-26,-48]]},

	{"names":["asl b"],"handedness":"right","handyRevision":5,"time":1621883082793,"headPosition":[-48,-279,-105],"headRotation":[-0.0472995944462143,-0.2602977265871908,-0.04700969032239724,0.9632226772436064],"jointPositions":[[0,0,0],[-18,-26,-39],[-23,-38,-69],[4,-40,-89],[27,-34,-83],[-16,-9,-41],[-24,-7,-96],[-17,-12,-133],[-13,-19,-156],[-7,-23,-177],[-3,-9,-41],[-2,-3,-96],[4,-7,-138],[7,-15,-164],[11,-17,-189],[8,-9,-38],[17,-7,-89],[21,-11,-127],[24,-16,-153],[25,-18,-177],[23,-9,-34],[35,-14,-78],[37,-15,-109],[39,-17,-129],[38,-21,-150]],"digitTipPositions":[[27,-34,-83],[-7,-23,-177],[11,-17,-189],[25,-18,-177],[38,-21,-150]]},

	{"names":["asl c"],"handedness":"right","handyRevision":5,"time":1621883106278,"headPosition":[-161,-253,-181],"headRotation":[-0.031044843855791704,-0.3587409993860259,-0.022698032565334196,0.932644578090668],"jointPositions":[[0,0,0],[-26,-22,-37],[-35,-48,-53],[-32,-73,-76],[-19,-87,-91],[-16,-9,-41],[-24,-7,-96],[-15,-22,-130],[-13,-45,-136],[-11,-68,-135],[-3,-9,-41],[-2,-3,-96],[7,-19,-135],[7,-46,-138],[3,-69,-129],[8,-9,-38],[17,-7,-89],[26,-18,-125],[24,-44,-131],[16,-66,-123],[23,-9,-34],[35,-14,-78],[43,-22,-107],[39,-40,-113],[29,-60,-112]],"digitTipPositions":[[-19,-87,-91],[-11,-68,-135],[3,-69,-129],[16,-66,-123],[29,-60,-112]]},
	
	{"names":["asl ch"],"handedness":"right","handyRevision":5,"time":1621883140308,"headPosition":[-189,-341,-23],"headRotation":[-0.08784393135065552,-0.292413990755669,-0.03092413135597379,0.9517463881176054],"jointPositions":[[0,0,0],[-33,-10,-31],[-58,-10,-52],[-82,-6,-75],[-104,-2,-85],[-16,-9,-41],[-24,-7,-96],[-13,-14,-132],[-6,-29,-150],[1,-39,-168],[-3,-9,-41],[-2,-3,-96],[10,-21,-133],[18,-32,-156],[27,-38,-179],[8,-9,-38],[17,-7,-89],[17,-43,-103],[9,-47,-78],[3,-31,-60],[23,-9,-34],[35,-14,-78],[27,-43,-80],[18,-45,-62],[12,-29,-49]],"digitTipPositions":[[-104,-2,-85],[1,-39,-168],[27,-38,-179],[3,-31,-60],[12,-29,-49]]},

	{"names":["asl d"],"handedness":"right","handyRevision":5,"time":1621883173585,"headPosition":[-65,-248,-180],"headRotation":[-0.0327625837204299,-0.280829044991422,-0.0223488575246916,0.9589380517573219],"jointPositions":[[0,0,0],[-27,-21,-37],[-39,-45,-55],[-23,-64,-78],[-1,-68,-87],[-16,-9,-41],[-24,-7,-96],[-25,0,-133],[-25,-2,-157],[-24,-3,-180],[-3,-9,-41],[-2,-3,-96],[1,-34,-125],[-2,-56,-109],[-6,-67,-86],[8,-9,-38],[17,-7,-89],[21,-37,-113],[12,-53,-94],[3,-56,-72],[23,-9,-34],[35,-14,-78],[35,-37,-98],[25,-50,-85],[13,-50,-67]],"digitTipPositions":[[-1,-68,-87],[-24,-3,-180],[-6,-67,-86],[3,-56,-72],[13,-50,-67]]},
	
	{"names":["asl e"],"handedness":"right","handyRevision":5,"time":1621883218489,"headPosition":[-197,-273,-145],"headRotation":[-0.017489514609342158,-0.26509877312444663,0.013989895152736636,0.9639611193528128],"jointPositions":[[0,0,0],[-25,-22,-37],[-35,-47,-56],[-16,-63,-77],[8,-62,-82],[-16,-9,-41],[-24,-7,-96],[-21,-39,-117],[-20,-57,-100],[-20,-64,-79],[-3,-9,-41],[-2,-3,-96],[2,-37,-121],[-1,-59,-104],[-7,-68,-81],[8,-9,-38],[17,-7,-89],[21,-36,-114],[13,-57,-99],[3,-63,-78],[23,-9,-34],[35,-14,-78],[40,-32,-102],[32,-51,-99],[19,-64,-88]],"digitTipPositions":[[8,-62,-82],[-20,-64,-79],[-7,-68,-81],[3,-63,-78],[19,-64,-88]]},

	{"names":["asl f"],"handedness":"right","handyRevision":5,"time":1621883249037,"headPosition":[-28,-306,-143],"headRotation":[-0.0007735203828889945,-0.25933821184840133,0.015459251370733788,0.965662521187352],"jointPositions":[[0,0,0],[-25,-22,-37],[-37,-34,-65],[-34,-43,-98],[-14,-48,-111],[-16,-9,-41],[-24,-7,-96],[-11,-11,-132],[-12,-35,-126],[-18,-46,-108],[-3,-9,-41],[-2,-3,-96],[6,-8,-138],[10,-17,-163],[15,-21,-187],[8,-9,-38],[17,-7,-89],[23,-9,-127],[27,-13,-153],[30,-14,-177],[23,-9,-34],[35,-14,-78],[40,-11,-108],[43,-13,-128],[45,-13,-150]],"digitTipPositions":[[-14,-48,-111],[-18,-46,-108],[15,-21,-187],[30,-14,-177],[45,-13,-150]]},

	{"names":["asl g","fire point","👆","👉","👇","👈"],"handedness":"right","handyRevision":5,"time":1621883280506,"headPosition":[-138,-288,-47],"headRotation":[-0.06227371595365319,-0.30639725922426614,-0.04356903981644507,0.9488648129806869],"jointPositions":[[0,0,0],[-24,-23,-37],[-36,-35,-65],[-24,-45,-95],[-15,-55,-115],[-16,-9,-41],[-24,-7,-96],[-15,-17,-132],[-10,-29,-152],[-4,-39,-171],[-3,-9,-41],[-2,-3,-96],[-1,-44,-106],[-5,-45,-78],[-10,-27,-62],[8,-9,-38],[17,-7,-89],[14,-45,-87],[7,-42,-62],[2,-23,-46],[23,-9,-34],[35,-14,-78],[26,-43,-75],[20,-41,-56],[15,-26,-40]],"digitTipPositions":[[-15,-55,-115],[-4,-39,-171],[-10,-27,-62],[2,-23,-46],[15,-26,-40]]},
	
	{"names":["asl h"],"handedness":"right","handyRevision":5,"time":1621883524798,"headPosition":[-160,-335,107],"headRotation":[-0.03357166353848798,-0.4143326464547515,-0.030494249244769803,0.9089947721405505],"jointPositions":[[0,0,0],[-22,-24,-38],[-30,-39,-66],[-8,-47,-90],[12,-53,-104],[-16,-9,-41],[-24,-7,-96],[-16,-25,-129],[-11,-39,-148],[-4,-48,-167],[-3,-9,-41],[-2,-3,-96],[6,-27,-130],[11,-42,-153],[17,-51,-175],[8,-9,-38],[17,-7,-89],[15,-45,-96],[8,-44,-70],[4,-23,-59],[23,-9,-34],[35,-14,-78],[26,-43,-77],[18,-46,-59],[11,-31,-44]],"digitTipPositions":[[12,-53,-104],[-4,-48,-167],[17,-51,-175],[4,-23,-59],[11,-31,-44]]},

	{"names":["asl i"],"handedness":"right","handyRevision":5,"time":1621883555010,"headPosition":[172,-321,-44],"headRotation":[0.03749899091529338,-0.23097225888692183,0.009067786883806443,0.9721951528832367],"jointPositions":[[0,0,0],[-25,-22,-37],[-38,-38,-63],[-19,-51,-88],[4,-54,-95],[-16,-9,-41],[-24,-7,-96],[-17,-42,-110],[-23,-45,-87],[-27,-26,-76],[-3,-9,-41],[-2,-3,-96],[1,-43,-109],[-5,-44,-82],[-11,-24,-68],[8,-9,-38],[17,-7,-89],[17,-43,-103],[9,-51,-79],[4,-31,-65],[23,-9,-34],[35,-14,-78],[35,-21,-108],[37,-26,-127],[37,-29,-149]],"digitTipPositions":[[4,-54,-95],[-27,-26,-76],[-11,-24,-68],[4,-31,-65],[37,-29,-149]]},

	{"names":["asl j"],"handedness":"right","handyRevision":5,"time":1621883586214,"headPosition":[-9,-350,-84],"headRotation":[0.055186108607465874,-0.5228392650974379,0.018024563460881608,0.8504520631419987],"jointPositions":[[0,0,0],[-25,-22,-37],[-36,-44,-59],[-13,-58,-81],[11,-58,-86],[-16,-9,-41],[-24,-7,-96],[-20,-43,-110],[-21,-46,-86],[-23,-26,-75],[-3,-9,-41],[-2,-3,-96],[-1,-44,-106],[-4,-45,-78],[-8,-22,-68],[8,-9,-38],[17,-7,-89],[15,-44,-99],[9,-52,-74],[6,-31,-62],[23,-9,-34],[35,-14,-78],[52,-25,-101],[65,-32,-115],[78,-37,-132]],"digitTipPositions":[[11,-58,-86],[-23,-26,-75],[-8,-22,-68],[6,-31,-62],[78,-37,-132]]},

	{"names":["asl k"],"handedness":"right","handyRevision":5,"time":1621883617097,"headPosition":[-71,-335,-50],"headRotation":[0.043609006075050166,-0.2717876341766656,0.010052260968215465,0.9613161218418714],"jointPositions":[[0,0,0],[-19,-26,-39],[-26,-33,-70],[-16,-35,-102],[-10,-39,-125],[-16,-9,-41],[-24,-7,-96],[-27,-29,-127],[-29,-44,-146],[-30,-53,-167],[-3,-9,-41],[-2,-3,-96],[6,-34,-124],[11,-53,-143],[17,-67,-163],[8,-9,-38],[17,-7,-89],[14,-45,-88],[5,-53,-64],[-3,-39,-45],[23,-9,-34],[35,-14,-78],[25,-43,-74],[16,-49,-57],[6,-42,-39]],"digitTipPositions":[[-10,-39,-125],[-30,-53,-167],[17,-67,-163],[-3,-39,-45],[6,-42,-39]]},

	{"names":["asl l"],"handedness":"right","handyRevision":5,"time":1621883650723,"headPosition":[-272,-199,-128],"headRotation":[0.03381098601398088,-0.30375360911327437,0.012240874941304313,0.9520718046173584],"jointPositions":[[0,0,0],[-32,-13,-33],[-54,-15,-57],[-76,-11,-82],[-98,-6,-92],[-16,-9,-41],[-24,-7,-96],[-17,-9,-133],[-13,-13,-157],[-8,-12,-179],[-3,-9,-41],[-2,-3,-96],[0,-43,-110],[-4,-51,-84],[-10,-34,-67],[8,-9,-38],[17,-7,-89],[16,-45,-96],[7,-48,-71],[1,-32,-54],[23,-9,-34],[35,-14,-78],[28,-43,-81],[19,-44,-63],[12,-29,-48]],"digitTipPositions":[[-98,-6,-92],[-8,-12,-179],[-10,-34,-67],[1,-32,-54],[12,-29,-48]]},

	{"names":["asl m"],"handedness":"right","handyRevision":5,"time":1621883703132,"headPosition":[-85,-346,-124],"headRotation":[0.03243759818141493,-0.3761283240070181,0.04622402810031861,0.9248451855190484],"jointPositions":[[0,0,0],[-20,-25,-38],[-24,-48,-61],[-6,-63,-86],[2,-79,-103],[-16,-9,-41],[-24,-7,-96],[-18,-42,-110],[-18,-65,-102],[-15,-86,-96],[-3,-9,-41],[-2,-3,-96],[0,-39,-119],[-1,-65,-111],[-4,-85,-96],[8,-9,-38],[17,-7,-89],[19,-40,-108],[15,-66,-106],[7,-85,-92],[23,-9,-34],[35,-14,-78],[32,-43,-87],[20,-48,-72],[6,-45,-55]],"digitTipPositions":[[2,-79,-103],[-15,-86,-96],[-4,-85,-96],[7,-85,-92],[6,-45,-55]]},
	
	{"names":["asl n"],"handedness":"right","handyRevision":5,"time":1621883735422,"headPosition":[-32,-352,-23],"headRotation":[0.011456122586089225,-0.33282557994311757,0.03247964659171118,0.9423592525900056],"jointPositions":[[0,0,0],[-25,-22,-37],[-35,-45,-59],[-22,-62,-84],[2,-64,-92],[-16,-9,-41],[-24,-7,-96],[-19,-43,-107],[-19,-64,-94],[-18,-84,-83],[-3,-9,-41],[-2,-3,-96],[0,-42,-112],[-2,-66,-99],[-6,-83,-80],[8,-9,-38],[17,-7,-89],[17,-45,-97],[6,-51,-73],[-2,-34,-58],[23,-9,-34],[35,-14,-78],[27,-43,-80],[17,-47,-63],[7,-36,-47]],"digitTipPositions":[[2,-64,-92],[-18,-84,-83],[-6,-83,-80],[-2,-34,-58],[7,-36,-47]]},
	
	{"names":["asl o","loupe"],"handedness":"right","handyRevision":5,"time":1621883772792,"headPosition":[-91,-299,-181],"headRotation":[0.03348119013821816,-0.30966151142360704,0.020763452838619665,0.9500303335970862],"jointPositions":[[0,0,0],[-26,-21,-37],[-38,-43,-58],[-34,-63,-84],[-17,-72,-99],[-16,-9,-41],[-24,-7,-96],[-16,-35,-120],[-17,-57,-111],[-18,-74,-96],[-3,-9,-41],[-2,-3,-96],[6,-34,-124],[2,-58,-110],[-5,-71,-90],[8,-9,-38],[17,-7,-89],[23,-35,-115],[16,-59,-105],[6,-72,-87],[23,-9,-34],[35,-14,-78],[37,-34,-101],[30,-53,-98],[17,-68,-87]],"digitTipPositions":[[-17,-72,-99],[-18,-74,-96],[-5,-71,-90],[6,-72,-87],[17,-68,-87]]},

	{"names":["asl p"],"handedness":"right","handyRevision":5,"time":1621883843845,"headPosition":[-71,-274,-308],"headRotation":[0.07772350924323665,-0.37829868968310615,0.09670243274415982,0.9173318684924602],"jointPositions":[[0,0,0],[-19,-26,-39],[-23,-40,-67],[-14,-50,-98],[-12,-60,-121],[-16,-9,-41],[-24,-7,-96],[-19,-17,-132],[-15,-25,-155],[-10,-28,-177],[-3,-9,-41],[-2,-3,-96],[4,-42,-112],[4,-69,-112],[5,-94,-114],[8,-9,-38],[17,-7,-89],[15,-43,-102],[13,-70,-104],[10,-93,-110],[23,-9,-34],[35,-14,-78],[28,-41,-89],[25,-61,-95],[19,-80,-104]],"digitTipPositions":[[-12,-60,-121],[-10,-28,-177],[5,-94,-114],[10,-93,-110],[19,-80,-104]]},

	{"names":["asl q"],"handedness":"right","handyRevision":5,"time":1621883887900,"headPosition":[-280,-176,-112],"headRotation":[0.05420933391156161,-0.353771206620907,0.03822371464044733,0.9329770786074582],"jointPositions":[[0,0,0],[-19,-26,-39],[-21,-48,-62],[-11,-65,-90],[-3,-79,-109],[-16,-9,-41],[-24,-7,-96],[-25,-39,-117],[-24,-61,-126],[-23,-82,-134],[-3,-9,-41],[-2,-3,-96],[3,-44,-107],[-7,-55,-84],[-17,-37,-69],[8,-9,-38],[17,-7,-89],[15,-45,-92],[7,-51,-67],[3,-30,-54],[23,-9,-34],[35,-14,-78],[27,-43,-79],[18,-49,-62],[13,-33,-48]],"digitTipPositions":[[-3,-79,-109],[-23,-82,-134],[-17,-37,-69],[3,-30,-54],[13,-33,-48]]},

	{"names":["asl r"],"handedness":"right","handyRevision":5,"time":1621883941368,"headPosition":[-158,-291,-93],"headRotation":[0.06442846407322658,-0.42058347759655473,0.03868907364814559,0.9041358573449799],"jointPositions":[[0,0,0],[-23,-24,-38],[-31,-43,-62],[-13,-57,-88],[8,-62,-100],[-16,-9,-41],[-24,-7,-96],[-13,-23,-129],[-6,-35,-148],[2,-43,-168],[-3,-9,-41],[-2,-3,-96],[12,-14,-135],[20,-22,-160],[29,-23,-183],[8,-9,-38],[17,-7,-89],[17,-44,-101],[8,-49,-76],[3,-29,-63],[23,-9,-34],[35,-14,-78],[29,-43,-82],[18,-48,-66],[9,-34,-51]],"digitTipPositions":[[8,-62,-100],[2,-43,-168],[29,-23,-183],[3,-29,-63],[9,-34,-51]]},

	{"names":["asl s","fist","✊","👊","🤛","🤜"],"handedness":"right","handyRevision":5,"time":1621882985698,"headPosition":[-49,-305,-88],"headRotation":[-0.031909189820257,-0.2846129436992186,-0.02500938264617849,0.957784842470128],"jointPositions":[[0,0,0],[-23,-24,-38],[-32,-45,-61],[-9,-57,-83],[15,-56,-87],[-16,-9,-41],[-24,-7,-96],[-19,-41,-113],[-22,-45,-89],[-25,-25,-79],[-3,-9,-41],[-2,-3,-96],[-1,-44,-106],[-5,-45,-79],[-9,-22,-69],[8,-9,-38],[17,-7,-89],[14,-45,-91],[8,-45,-65],[5,-24,-55],[23,-9,-34],[35,-14,-78],[26,-43,-77],[21,-44,-58],[19,-27,-44]],"digitTipPositions":[[15,-56,-87],[-25,-25,-79],[-9,-22,-69],[5,-24,-55],[19,-27,-44]]},

	{"names":["asl t"],"handedness":"right","handyRevision":5,"time":1621883992482,"headPosition":[-6,-305,-167],"headRotation":[-0.009946231507828314,-0.3057487129007078,0.006151601101235265,0.9520404164885696],"jointPositions":[[0,0,0],[-23,-23,-38],[-34,-36,-66],[-20,-45,-95],[-9,-55,-115],[-16,-9,-41],[-24,-7,-96],[-20,-39,-117],[-21,-55,-98],[-21,-57,-76],[-3,-9,-41],[-2,-3,-96],[1,-42,-113],[-4,-55,-90],[-10,-55,-65],[8,-9,-38],[17,-7,-89],[16,-45,-94],[6,-54,-71],[-2,-47,-49],[23,-9,-34],[35,-14,-78],[26,-43,-77],[18,-50,-60],[8,-43,-41]],"digitTipPositions":[[-9,-55,-115],[-21,-57,-76],[-10,-55,-65],[-2,-47,-49],[8,-43,-41]]},

	{"names":["asl u"],"handedness":"right","handyRevision":5,"time":1621884035004,"headPosition":[-281,-172,-142],"headRotation":[0.017931342214383392,-0.33171469918263097,0.013389412271516729,0.9431142820221716],"jointPositions":[[0,0,0],[-20,-25,-38],[-26,-43,-65],[-4,-53,-89],[19,-53,-96],[-16,-9,-41],[-24,-7,-96],[-23,-13,-134],[-22,-17,-157],[-19,-16,-180],[-3,-9,-41],[-2,-3,-96],[3,-11,-138],[7,-16,-164],[11,-15,-189],[8,-9,-38],[17,-7,-89],[17,-41,-106],[10,-48,-81],[7,-27,-68],[23,-9,-34],[35,-14,-78],[29,-43,-83],[18,-48,-67],[8,-36,-51]],"digitTipPositions":[[19,-53,-96],[-19,-16,-180],[11,-15,-189],[7,-27,-68],[8,-36,-51]]},

	{"names":["asl v"],"handedness":"right","handyRevision":5,"time":1621884066917,"headPosition":[-55,-372,-73],"headRotation":[-0.003567139123922908,-0.36063626617032946,-0.010871286411395613,0.932636356721219],"jointPositions":[[0,0,0],[-22,-24,-38],[-29,-46,-61],[-7,-58,-84],[15,-62,-94],[-16,-9,-41],[-24,-7,-96],[-31,-21,-131],[-35,-31,-153],[-37,-35,-174],[-3,-9,-41],[-2,-3,-96],[0,-23,-134],[1,-35,-158],[3,-42,-182],[8,-9,-38],[17,-7,-89],[15,-45,-94],[7,-55,-71],[1,-38,-54],[23,-9,-34],[35,-14,-78],[26,-43,-78],[17,-53,-62],[7,-43,-45]],"digitTipPositions":[[15,-62,-94],[-37,-35,-174],[3,-42,-182],[1,-38,-54],[7,-43,-45]]},

	{"names":["asl w"],"handedness":"right","handyRevision":5,"time":1621884095655,"headPosition":[-27,-347,-153],"headRotation":[0.061287759096724834,-0.335442304747717,-0.02348200677658124,0.9397717051435551],"jointPositions":[[0,0,0],[-19,-26,-39],[-22,-47,-63],[2,-56,-85],[25,-59,-95],[-16,-9,-41],[-24,-7,-96],[-36,-16,-131],[-44,-22,-153],[-49,-23,-175],[-3,-9,-41],[-2,-3,-96],[-4,-1,-139],[-5,0,-166],[-4,6,-190],[8,-9,-38],[17,-7,-89],[32,-16,-124],[41,-24,-147],[49,-30,-170],[23,-9,-34],[35,-14,-78],[34,-40,-93],[25,-56,-84],[11,-65,-69]],"digitTipPositions":[[25,-59,-95],[-49,-23,-175],[-4,6,-190],[49,-30,-170],[11,-65,-69]]},

	{"names":["asl x"],"handedness":"right","handyRevision":5,"time":1621884136146,"headPosition":[-97,-294,-162],"headRotation":[0.008090741280468114,-0.36292840909942425,-0.018366003423345226,0.931600879540233],"jointPositions":[[0,0,0],[-24,-23,-38],[-36,-40,-63],[-24,-53,-91],[0,-55,-99],[-16,-9,-41],[-24,-7,-96],[-17,-2,-133],[-15,-24,-142],[-14,-47,-139],[-3,-9,-41],[-2,-3,-96],[1,-41,-115],[-3,-59,-94],[-10,-50,-72],[8,-9,-38],[17,-7,-89],[17,-44,-100],[8,-56,-78],[0,-45,-58],[23,-9,-34],[35,-14,-78],[29,-43,-86],[20,-54,-71],[11,-45,-53]],"digitTipPositions":[[0,-55,-99],[-14,-47,-139],[-10,-50,-72],[0,-45,-58],[11,-45,-53]]},

	{"names":["asl y"],"handedness":"right","handyRevision":5,"time":1621884157713,"headPosition":[-29,-367,-103],"headRotation":[-0.06855263397774006,-0.3187233045746792,-0.0068701472086373635,0.9453405652940129],"jointPositions":[[0,0,0],[-32,-13,-33],[-55,-20,-55],[-78,-23,-79],[-99,-24,-92],[-16,-9,-41],[-24,-7,-96],[-21,-45,-102],[-20,-46,-77],[-21,-29,-62],[-3,-9,-41],[-2,-3,-96],[-2,-45,-101],[-5,-50,-74],[-9,-30,-59],[8,-9,-38],[17,-7,-89],[15,-45,-96],[9,-54,-72],[4,-36,-55],[23,-9,-34],[35,-14,-78],[47,-24,-104],[52,-39,-117],[52,-57,-130]],"digitTipPositions":[[-99,-24,-92],[-21,-29,-62],[-9,-30,-59],[4,-36,-55],[52,-57,-130]]},

	{"names":["asl z"],"handedness":"right","handyRevision":5,"time":1621884190880,"headPosition":[-167,-293,-197],"headRotation":[-0.0014638600378968603,-0.3289165354022858,0.008914320518051796,0.9443157865589369],"jointPositions":[[0,0,0],[-22,-24,-38],[-28,-45,-62],[-12,-59,-88],[7,-66,-102],[-16,-9,-41],[-24,-7,-96],[-20,-11,-134],[-19,-34,-143],[-16,-54,-151],[-3,-9,-41],[-2,-3,-96],[2,-43,-111],[-5,-54,-87],[-13,-37,-70],[8,-9,-38],[17,-7,-89],[16,-45,-95],[6,-54,-72],[0,-35,-58],[23,-9,-34],[35,-14,-78],[28,-43,-81],[18,-51,-65],[9,-40,-49]],"digitTipPositions":[[7,-66,-102],[-16,-54,-151],[-13,-37,-70],[0,-35,-58],[9,-40,-49]]},
	





	    ///////////////////////
	   //                   //
	  //    ASL Numbers    //
	 //                   //
	///////////////////////


	{"names":["asl 1","point"],"handedness":"right","handyRevision":5,"time":1621882025090,"headPosition":[-118,-288,-85],"headRotation":[-0.04833077066753121,-0.17988780704218232,-0.02101940123998162,0.9822742472459218],"jointPositions":[[0,0,0],[-23,-24,-38],[-32,-45,-61],[-11,-58,-84],[12,-61,-93],[-16,-9,-41],[-24,-7,-96],[-25,-12,-134],[-25,-21,-156],[-24,-25,-178],[-3,-9,-41],[-2,-3,-96],[0,-44,-108],[-5,-44,-81],[-10,-22,-71],[8,-9,-38],[17,-7,-89],[15,-45,-92],[7,-45,-67],[4,-23,-56],[23,-9,-34],[35,-14,-78],[27,-43,-80],[20,-46,-61],[16,-28,-48]],"digitTipPositions":[[12,-61,-93],[-24,-25,-178],[-10,-22,-71],[4,-23,-56],[16,-28,-48]]},

	{"names":["asl 2","peace","✌️"],"handedness":"right","handyRevision":5,"time":1621882063463,"headPosition":[-78,-333,-64],"headRotation":[-0.012466682384500495,-0.20815003942108648,-0.007616852305390317,0.97798779457112],"jointPositions":[[0,0,0],[-23,-24,-38],[-31,-46,-61],[-7,-58,-82],[16,-61,-90],[-16,-9,-41],[-24,-7,-96],[-36,-17,-130],[-44,-24,-152],[-50,-27,-174],[-3,-9,-41],[-2,-3,-96],[12,-22,-132],[21,-34,-155],[31,-39,-177],[8,-9,-38],[17,-7,-89],[15,-45,-93],[6,-52,-69],[1,-33,-55],[23,-9,-34],[35,-14,-78],[27,-43,-78],[16,-50,-62],[5,-39,-46]],"digitTipPositions":[[16,-61,-90],[-50,-27,-174],[31,-39,-177],[1,-33,-55],[5,-39,-46]]},

	{"names":["asl 3"],"handedness":"right","handyRevision":5,"time":1621882096324,"headPosition":[-90,-284,-119],"headRotation":[-0.0259385870508839,-0.2848118057916195,0.0023300015486591072,0.9582296150481066],"jointPositions":[[0,0,0],[-32,-12,-32],[-57,-17,-53],[-81,-18,-77],[-103,-17,-88],[-16,-9,-41],[-24,-7,-96],[-34,-8,-133],[-40,-15,-155],[-44,-18,-177],[-3,-9,-41],[-2,-3,-96],[6,-28,-129],[12,-45,-150],[18,-58,-171],[8,-9,-38],[17,-7,-89],[15,-45,-95],[7,-45,-70],[2,-28,-54],[23,-9,-34],[35,-14,-78],[27,-43,-79],[18,-43,-61],[11,-29,-46]],"digitTipPositions":[[-103,-17,-88],[-44,-18,-177],[18,-58,-171],[2,-28,-54],[11,-29,-46]]},

	{"names":["asl 4"],"handedness":"right","handyRevision":5,"time":1621882120663,"headPosition":[-10,-289,-146],"headRotation":[-0.0134235648291655,-0.29478495379836034,-0.005683892147365636,0.9554524226671681],"jointPositions":[[0,0,0],[-19,-26,-39],[-24,-40,-67],[2,-44,-87],[27,-39,-86],[-16,-9,-41],[-24,-7,-96],[-33,-16,-132],[-39,-25,-154],[-43,-30,-175],[-3,-9,-41],[-2,-3,-96],[2,-5,-138],[4,-9,-166],[7,-7,-190],[8,-9,-38],[17,-7,-89],[28,-8,-126],[36,-10,-152],[42,-9,-175],[23,-9,-34],[35,-14,-78],[55,-15,-101],[69,-16,-116],[83,-15,-132]],"digitTipPositions":[[27,-39,-86],[-43,-30,-175],[7,-7,-190],[42,-9,-175],[83,-15,-132]]},

	{"names":["asl 5"],"handedness":"right","handyRevision":5,"time":1621882144820,"headPosition":[-68,-307,-118],"headRotation":[-0.0006548264132407408,-0.26763179031899964,-0.027543871398438093,0.9631272658719188],"jointPositions":[[0,0,0],[-32,-13,-33],[-56,-24,-51],[-76,-36,-76],[-96,-43,-88],[-16,-9,-41],[-24,-7,-96],[-29,-19,-132],[-32,-31,-152],[-34,-39,-173],[-3,-9,-41],[-2,-3,-96],[4,-17,-136],[7,-28,-161],[12,-33,-185],[8,-9,-38],[17,-7,-89],[31,-14,-125],[40,-22,-148],[45,-32,-170],[23,-9,-34],[35,-14,-78],[54,-17,-102],[68,-21,-116],[73,-37,-130]],"digitTipPositions":[[-96,-43,-88],[-34,-39,-173],[12,-33,-185],[45,-32,-170],[73,-37,-130]]},

	{"names":["asl 6"],"handedness":"right","handyRevision":5,"time":1621882165010,"headPosition":[-57,-289,-169],"headRotation":[-0.01464764983750695,-0.21534395198621833,0.0032979103239686703,0.9764228347997765],"jointPositions":[[0,0,0],[-20,-25,-38],[-25,-47,-62],[3,-54,-81],[26,-55,-88],[-16,-9,-41],[-24,-7,-96],[-32,-6,-133],[-36,-12,-156],[-39,-15,-178],[-3,-9,-41],[-2,-3,-96],[1,2,-138],[2,3,-166],[5,6,-190],[8,-9,-38],[17,-7,-89],[30,-10,-125],[39,-15,-150],[46,-20,-173],[23,-9,-34],[35,-14,-78],[39,-34,-101],[32,-53,-98],[18,-59,-83]],"digitTipPositions":[[26,-55,-88],[-39,-15,-178],[5,6,-190],[46,-20,-173],[18,-59,-83]]},

	{"names":["asl 7"],"handedness":"right","handyRevision":5,"time":1621882346213,"headPosition":[-27,-334,-145],"headRotation":[-0.015005493996917939,-0.15341568022168556,0.03297758828053621,0.9874973125992063],"jointPositions":[[0,0,0],[-25,-22,-37],[-37,-42,-60],[-16,-55,-83],[8,-57,-89],[-16,-9,-41],[-24,-7,-96],[-35,-4,-132],[-42,-8,-155],[-47,-8,-177],[-3,-9,-41],[-2,-3,-96],[5,-2,-138],[9,-4,-165],[13,-5,-190],[8,-9,-38],[17,-7,-89],[27,-29,-120],[17,-48,-105],[5,-54,-84],[23,-9,-34],[35,-14,-78],[54,-20,-101],[68,-23,-115],[82,-25,-132]],"digitTipPositions":[[8,-57,-89],[-47,-8,-177],[13,-5,-190],[5,-54,-84],[82,-25,-132]]},

	{"names":["asl 8"],"handedness":"right","handyRevision":5,"time":1621882371401,"headPosition":[-49,-359,-81],"headRotation":[-0.057632794428381325,-0.24063075840535386,0.010720279680260025,0.9688448661910161],"jointPositions":[[0,0,0],[-26,-21,-37],[-38,-44,-57],[-24,-62,-82],[-3,-68,-93],[-16,-9,-41],[-24,-7,-96],[-32,-10,-133],[-36,-22,-154],[-39,-31,-174],[-3,-9,-41],[-2,-3,-96],[1,-32,-127],[-1,-56,-114],[-6,-65,-91],[8,-9,-38],[17,-7,-89],[34,-21,-121],[44,-33,-143],[52,-45,-162],[23,-9,-34],[35,-14,-78],[58,-17,-98],[74,-19,-110],[91,-19,-124]],"digitTipPositions":[[-3,-68,-93],[-39,-31,-174],[-6,-65,-91],[52,-45,-162],[91,-19,-124]]},

	{"names":["asl 9"],"handedness":"right","handyRevision":5,"time":1621882395447,"headPosition":[-59,-356,-39],"headRotation":[-0.04754158733028248,-0.20973690866547548,0.008011874154798836,0.9765684998229093],"jointPositions":[[0,0,0],[-30,-17,-35],[-47,-41,-47],[-34,-64,-69],[-12,-67,-78],[-16,-9,-41],[-24,-7,-96],[-23,-43,-110],[-20,-56,-90],[-16,-58,-68],[-3,-9,-41],[-2,-3,-96],[-1,-21,-134],[0,-34,-159],[1,-41,-183],[8,-9,-38],[17,-7,-89],[28,-8,-126],[34,-15,-151],[40,-19,-174],[23,-9,-34],[35,-14,-78],[57,-15,-100],[72,-17,-113],[87,-17,-129]],"digitTipPositions":[[-12,-67,-78],[-16,-58,-68],[1,-41,-183],[40,-19,-174],[87,-17,-129]]},

	{"names":["asl 10"],"handedness":"right","handyRevision":5,"time":1621882417336,"headPosition":[-157,-305,-42],"headRotation":[-0.10482942509633282,-0.16455429850635156,-0.021289602152466634,0.9805505709975685],"jointPositions":[[0,0,0],[-31,-14,-34],[-51,-13,-59],[-72,-5,-85],[-93,2,-95],[-16,-9,-41],[-24,-7,-96],[-21,-45,-102],[-21,-43,-77],[-21,-25,-63],[-3,-9,-41],[-2,-3,-96],[-2,-45,-97],[-5,-46,-70],[-9,-28,-53],[8,-9,-38],[17,-7,-89],[14,-45,-88],[8,-45,-62],[5,-26,-47],[23,-9,-34],[35,-14,-78],[26,-43,-80],[22,-44,-60],[20,-27,-46]],"digitTipPositions":[[-93,2,-95],[-21,-25,-63],[-9,-28,-53],[5,-26,-47],[20,-27,-46]]}




]
export { poses }