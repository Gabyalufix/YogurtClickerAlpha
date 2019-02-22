
fmtsci <- function(s){
  format(s,sci=T);
}




sphereVol <- function(r){
  (4/3) * pi * (r^3)
}
shellVol <- function(r0,thickness){
  ((4/3) * pi * ((r0+thickness)^3)) - ((4/3) * pi * ((r0)^3))
}
shellVolr <- function(r0,r1){
  ((4/3) * pi * ((r1)^3)) - ((4/3) * pi * ((r0)^3))
}
shellArea <- function(r0,r1){
  (pi * ((r1)^2)) - (pi * ((r0)^2))
}


shellVol(0,50)

stepSize <- 50;
thickness <- 50;

(50 * 51) / 2

spans <- t(sapply(0:100000,function(i){
  c((((50 + i)*(51+i))/2) - 1275,(((51 + i)*(52+i))/2) - 1275)
}))


N <- 500000;
diffs <-sapply(1:N,function(i){
  50 * (1.002^i)
})
breaks <- cumsum(diffs)


breaks <- sapply(1:N,function(i){
  50 * (1.002^i)
})

sapply(1:1000,function(i){
  (1.002^i)
})
#doubles every 347 spans.
#~8000 / 347
50 * 2^25

N0 <- N
if(breaks[length(breaks)] > 93000000000){
  N0 <- which(breaks  > 93000000000)[1]
}
plot.new();
par(mar = c(5.1,7.1,4.1,2.1))
plot.window(xlim=c(0,N0), ylim=range(log10( breaks[1:N0] )));
draw.logyaxis.stdScalePlot(ylim= range( log10(breaks[1:N0]) ) )
box(); axis(1);
lines(1:N0, log10(breaks[1:N0]))
abline(h=log10(93000000000),col="gray",lty=3)
abline(h=log10(150000),col="gray",lty=3)
abline(h=log10(520000000),col="blue",lty=3)

#N0 <- 1000
diffs <- diff(breaks);
plot.new();
par(mar = c(5.1,7.1,4.1,2.1))
plot.window(xlim=c(0,N0), ylim=range(log10( diffs[1:N0] )));
draw.logyaxis.stdScalePlot(ylim= range( log10(diffs[1:N0]) ) )
box(); axis(1);
lines(1:N0, log10(diffs[1:N0]))
abline(v=which(breaks > 93000000000)[1],col="gray",lty=3)
abline(v=which(breaks > 150000)[1],col="gray",lty=3)
abline(v=which(breaks > 520000000)[1],col="blue",lty=3)

(diffs[1:N0] / breaks[1:N0])


core.rad <- 6000;
core.dist <- 27000
disk.height <- 250;
idx.localEnd  <- which(breaks > disk.height)[1]
idx.coreEntry <- which(breaks > core.dist-core.rad)[1]
idx.coreExit  <- which(breaks > core.dist+core.rad)[1]
idx.coreCtr   <- which(breaks > core.dist)[1]
idx.end       <- which(breaks > 75000)[1]
MW <- 1:idx.end;


breaks[(974-50):(974+50)]


str.areas <- data.frame( innerRad = c(0,breaks[1:(N0-1)]), outerRad = breaks[1:N0] )
str.areas$thickness <- str.areas$outerRad - str.areas$innerRad;
str.areas$vol <- shellVolr(str.areas$innerRad, str.areas$outerRad);
str.areas$area <- shellArea(str.areas$innerRad, str.areas$outerRad);
str.areas$vol.contained <- shellVolr(0, str.areas$outerRad);
str.areas$area.contained <- shellArea(0, str.areas$outerRad);

MW.breakpt <- which(breaks > 75000 + 27000)[1]
MW.radpt <- which(breaks > 75000)[1]

str.areas[MW.breakpt,]


str.areas[1:10,]
(str.areas$dist + str.areas$thickness)[1:10]

str.areas$density <- NA;
str.areas$mass    <- NA;
str.areas$CT    <- NA;
str.areas$areaDensity    <- NA;
str.areas$distroDensity <- NA;
str.areas$avgInterPartDist <- NA;
str.areas$avgDistToInner <- NA;


main.MW.area <- shellArea(10000,75000)
core.MW.area <- shellArea(0,    10000)
total.MW.area <- shellArea(0,75000)
#Mass of bulge is 1e10M (or "about 1/6 the mass of the MW disk???")
#Total mass 1e12
#Dropoff is exponential with distance from ctr
#num s total: 1e11 to 4e11







growth.mod <- 3.26 * 890
density.exponential.P <- exp(- (str.areas$outerRad[MW] / growth.mod) )
density.adjust.factor <- density.exponential.P[idx.coreCtr] / 0.004
getLocalDensity <- function(r){
   ifelse(r > 75000,0,
     exp(- (r / growth.mod)  ) / density.adjust.factor
   );
}
fmtsci( sum( getLocalDensity( str.areas$outerRad[MW] ) * str.areas$filledVol[MW] ) )

coreDensity <- 1e11 / (shellArea(0,6000) * 250)

getLocalCoreDensity <- function(r){
   ifelse(r < core.rad,coreDensity,0);
}
fmtsci( sum( getLocalCoreDensity( str.areas$outerRad[MW] ) * str.areas$filledVol[MW] ) )


getLocalDensity(27000)
getLocalCoreDensity(27000)
getLocalCoreDensity(34000)

dd <- str.areas[,1:7]

dd$localDensity <- NA
dd$localDensity[1:idx.localEnd] <- 0.004

dd$localDensity[idx.localEnd:MW.radpt] <- sapply(idx.localEnd:MW.radpt,function(i){
  r <- dd$outerRad[i];
  dists <- sapply( 1:(pi * 100) / 100, function(theta){
    sqrt( (core.dist + r * cos(theta))^2 + (r * sin(theta))^2 )
  })
  mean( getLocalDensity(dists) + getLocalCoreDensity(dists) )
})
dd[MW,]

dd$filledVol <- NA;
dd$filledVol[1:idx.localEnd]        <- dd$vol[1:idx.localEnd]
dd$filledVol[idx.localEnd:idx.end ] <- dd$area[idx.localEnd:idx.end ] * disk.height

dd$CT <- NA;
dd$CT[MW] <- dd$localDensity[MW] * dd$filledVol[MW]

fmtsci(sum(dd$CT[MW]))

fmtsci( sum( getLocalCoreDensity( str.areas$outerRad[MW] ) * str.areas$filledVol[MW] ) )


dd[MW,]

out <- data.frame(IR = floor(dd$innerRad),OR = floor(dd$outerRad), thickness = floor(dd$thickness), filledVol = floor(dd$filledVol),CT = floor(dd$CT));

write.table((out[1:idx.end,]),file="GitHub/YogurtClickerAlpha/docs/starDistroTable.js",sep=",",row.names=F,col.names=F,quote=F);
write.table(t(out[1:idx.end,]),file="GitHub/YogurtClickerAlpha/docs/starDistroTable.js",sep=",",row.names=T,col.names=F,quote=F);


+ getLocalCoreDensity(dists)



sin(pi / 2)

sin(pi)
cos(pi)

str.areas$localDensity <- NA
str.areas$localDensity[1:idx.localEnd] <- 0.004

str.areas$filledVol <- NA;
str.areas$filledVol[1:idx.localEnd]        <- str.areas$vol[1:idx.localEnd]
str.areas$filledVol[idx.localEnd:idx.end ] <- str.areas$area[idx.localEnd:idx.end ] * 250

str.areas$localDensity[idx.localEnd:(idx.coreCtr-1) ] <- sapply(idx.localEnd:(idx.coreCtr-1),function(ii){
  mean(c(getLocalDensity(27000 - str.areas$outerRad[ii]),getLocalDensity(27000 - str.areas$outerRad[ii]), getLocalDensity(27000 + str.areas$outerRad[ii])));
})
str.areas$localDensity[idx.coreCtr:idx.end ] <- sapply(idx.coreCtr:idx.end,function(ii){
  mean(c(getLocalDensity(str.areas$outerRad[ii] - 27000),getLocalDensity(str.areas$outerRad[ii] - 27000), getLocalDensity(27000 + str.areas$outerRad[ii])));
})

fmtsci(sum(str.areas$filledVol[MW] * str.areas$localDensity[MW]))



############################################################################
############################################################################
############################################################################
############################################################################
















#guesses:
#num :         1e11
#num in core: 2e11 / 6
#
#density, core: 

core.rad <- 4000;
main.MW.area <- shellArea(core.rad,75000)
core.MW.area <- shellArea(0,    core.rad)
total.MW.area <- shellArea(0,75000)

main.MW.ct <- 2e11 * (5/6)
core.MW.ct <-  2e11 * (1/6)

core.MW.areaDensity <- core.MW.ct / core.MW.area
main.MW.areaDensity <- main.MW.ct / main.MW.area

core.MW.areaDensity 
main.MW.areaDensity

total.MW.ct <- (core.MW.areaDensity * core.MW.area) + (main.MW.areaDensity * main.MW.area)

MW.core.entry <- which(breaks > 27000-core.rad)[1]
MW.core.exit <- which(breaks > 27000+core.rad)[1]

str.areas$areaDensity[1:MW.radpt] <- main.MW.areaDensity;

str.areas$CT[1:MW.radpt] <- str.areas$area[1:MW.radpt] * main.MW.areaDensity

format( sum(str.areas$CT[1:MW.radpt]), scientific=T)

corezone.thick <- sum( str.areas$thickness[MW.core.entry:MW.core.exit] )
corezone.frac  <- str.areas$thickness[MW.core.entry:MW.core.exit] / corezone.thick

str.areas$CT[MW.core.entry:MW.core.exit] <- corezone.frac * core.MW.ct

str.areas$areaDensity[1:MW.radpt] <- str.areas$CT[1:MW.radpt] / str.areas$area[1:MW.radpt]

str.areas$distroDensity[1:MW.radpt] <- str.areas$CT[1:MW.radpt] / ( str.areas$area[1:MW.radpt] * 2000 )

str.areas$avgInterPartDist[1:MW.radpt] <- 1 / (str.areas$distroDensity[1:MW.radpt] ^ (1/3))

plot(1:MW.radpt,str.areas$areaDensity[1:MW.radpt])


localRegion.CT <- sum(str.areas$CT[1:MW.core.entry])
coreRegion.CT  <- sum(str.areas$CT[MW.core.entry:MW.core.exit])
diskRegion.CT  <- sum(str.areas$CT[MW.core.exit:MW.radpt])

format( sum(localRegion.CT ), scientific=T)
format( sum(diskregion.CT ), scientific=T)
format( sum(diskRegion.CT ), scientific=T)
format( sum(str.areas$CT[1:MW.radpt] ), scientific=T)
MW <- 1:MW.radpt;
     
density.exponential.P <- exp(- (str.areas$outerRad[MW] / 3.260) / 3000 )

density.exponential.Padj <- density.exponential.P[MW.core.exit:MW.radpt]
density.exponential.Padj <- density.exponential.Padj / sum(density.exponential.Padj);

ct.adjustFactorOld <- ct.adjustFactor
ct.adjustFactor <- density.exponential.Padj * str.areas$area[ MW.core.exit:MW.radpt ]
ct.adjusted <- (ct.adjustFactor / sum(ct.adjustFactor)) * diskRegion.CT
format( sum(ct.adjusted), scientific=T)
density.adjusted <- ct.adjusted / str.areas$area[ MW.core.exit:MW.radpt ]

str.areas$CT[MW.core.exit:MW.radpt] <- ct.adjusted;
str.areas$areaDensity[MW.core.exit:MW.radpt] <- density.adjusted;

str.areas$distroDensity[1:MW.radpt] <- str.areas$CT[1:MW.radpt] / ( str.areas$area[1:MW.radpt] * 2000 )
str.areas$avgInterPartDist[1:MW.radpt] <- 1 / (str.areas$distroDensity[1:MW.radpt] ^ (1/3))
str.areas[MW,]

halo.mass <- 1e9
halo.exit.idx <- which( str.areas$outerRad > 200000 )[1];
halo.volume <- sum(str.areas$vol[MW.radpt:halo.exit.idx])
halo.density <- (halo.mass / halo.volume)
halo.avgInterPartDist <- 1 / ( halo.density ^ (1/3) )

format( sum(str.areas$CT[MW]),scientific=T)



#Dwarf galaxies:
#  Always take up 1 slot?
#  Usually 1-7kly across
#  Flanked by extremely-low-density areas
#  Mass: 1e6-1e9

#halo: 75-200kly, mostly within 100kly
#total density: 
#peppered with globs and dwarf gals
#dwarfs:
#   Segue 1 75
#   Sagittarius Dwarf Sphr  81
#   Ursa Major II Dwarf 98
#   Reticulum II Dwarf  98
#   Triangulum II 98
#   Segue 2 144
#   Willman 1 120
#   Bootes II 136
#   Coma Berenices Dwarf  137
#   Bootes III  150
#LMC: 163kly; 1e10M
#   Bootes I  197
#SMC: 200kly; 7kly diam; 6.5e9M
#   Ursa Minor Dwarf  206
#   Draco Dwarf 258
#   Pisces I  260
#   Sextans Dwarf 281
#   Virgo I 280
#   Sculptor Dwarf  287
#   Ursa Major I Dwarf  330
#   Carina Dwarf  330
#   Crater II 383
#   Hercules Dwarf  430
#   Fornax Dwarf  460
#   Canes Venatici II Dwarf 490
#   Leo IV Dwarf  502
#   Pisces II 596
#   Leo II Dwarf  701
#   Canes Venatici I Dwarf  711
#   Leo I Dwarf 820
#   Leo T Dwarf 1370
#   Pheonix Dwarf 1440
#   Barnard's Galaxy  1630
#   NGC185  2010
#ANDRO: 2540kly; 220kly diam; 1.5e12M
idx.halo.exit <- 









133 / shellVolr(0,50)


xt <- (133 / shellVolr(0,50)) * shellArea(0,75000) * 1000
format(xt,sci=T)


xt <- (74582/ shellVolr(0,50)) * shellArea(0,75000) * 1000
format(xt,sci=T)

xt <- (main.MW.areaDensity / 1000)* shellArea(0,75000) * 1000
format(xt,sci=T)


(main.MW.areaDensity / 1000)* shellVolr(0,50)


























core.dist.idx <- (which(str.areas$outerRad > core.rad)[1]);
density.exponential.Padj <- density.exponential.P[core.dist.idx:MW.radpt] / sum(density.exponential.P[core.dist.idx:MW.radpt])
density.exponential.Padj <- density.exponential.Padj  / sum(density.exponential.Padj );

ct.adjustFactor  <- density.exponential.Padj * str.areas$area[ core.dist.idx:MW.radpt ]
ct.adjusted      <- (ct.adjustFactor / sum(ct.adjustFactor)) * diskRegion.CT
density.adjusted <- ct.adjusted / str.areas$area[core.dist.idx:MW.radpt ]


getLocalDensity <- function(r){
   ifelse(r > 75000,0,
     exp(- (r / 3.260) / 3000 ) / density.adjust.factor
   );
}
fmtsci( sum( getLocalDensity( str.areas$outerRad[MW] ) * str.areas$filledVol[MW] ) )



density.adjusted[MW.core.entry]


idx.ctr <- which(breaks > 27000)[1]
idx.ctr 

density.adjust.factor <- density.exponential.P[idx.ctr] / 0.004
density.exponential.P[idx.ctr] /density.adjust.factor

density.exponential.P /density.adjust.factor

getLocalDensity <- function(r){
   ifelse(r > 75000,0,
     exp(- (r / 3.260) / 3000 ) / density.adjust.factor
   );
}
fmtsci( sum( getLocalDensity( str.areas$outerRad[MW] ) * str.areas$filledVol[MW] ) )


getLocalDensity(27000)
getLocalDensity(core.rad)

mw.density <- getLocalDensity( MW ) 
mw.volume  <- str.areas$area[MW] * 250;
mw.cts     <- mw.volume * mw.density;
fmtsci(sum(mw.cts))

str.areas.old <- str.areas


str.areas <- str.areas.old[,1:7]

str.areas$localDensity <- NA
str.areas$localDensity[1:idx.localEnd] <- 0.004

str.areas$filledVol <- NA;
str.areas$filledVol[1:idx.localEnd]        <- str.areas$vol[1:idx.localEnd]
str.areas$filledVol[idx.localEnd:idx.end ] <- str.areas$area[idx.localEnd:idx.end ] * 250

str.areas$localDensity[idx.localEnd:(idx.coreCtr-1) ] <- sapply(idx.localEnd:(idx.coreCtr-1),function(ii){
  mean(c(getLocalDensity(27000 - str.areas$outerRad[ii]),getLocalDensity(27000 - str.areas$outerRad[ii]), getLocalDensity(27000 + str.areas$outerRad[ii])));
})
str.areas$localDensity[idx.coreCtr:idx.end ] <- sapply(idx.coreCtr:idx.end,function(ii){
  mean(c(getLocalDensity(str.areas$outerRad[ii] - 27000),getLocalDensity(str.areas$outerRad[ii] - 27000), getLocalDensity(27000 + str.areas$outerRad[ii])));
})

fmtsci(sum(str.areas$filledVol[MW] * str.areas$localDensity[MW]))
str.areas[MW,]

str.areas$filledVol[idx.localEnd:(idx.coreCtr-1) ]

str.areas[idx.coreCtr,]
head(str.areas)











