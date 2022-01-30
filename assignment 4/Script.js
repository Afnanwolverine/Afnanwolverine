var names = new Array();
names[0]="Afnan";
names[1]="nuha";
names[2]="Aurna";
names[3]="oishee";
names[4]="Jishan";
names[5]="jony";
names[6]="Maisha";
names[7]="Nubah";
names[8]="joy";
names[9]="Shormi";
for (var i = 0; i < names.length; i++) {
    if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
      console.log("Goodbye "+ names[i])
    }
    else {
      console.log("Hello "+ names[i])
    }
}
