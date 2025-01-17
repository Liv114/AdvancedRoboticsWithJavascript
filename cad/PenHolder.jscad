function getParameterDefinitions() {
    return [
        {  name: 'pen_d',
           type: 'int',
           initial: 8, min: 0, max: 99,
           caption: 'Pen diameter'
        }
    ];

}

function main() { 
var w = 7.5;
var h = 15;

return difference(
    translate([-10,-20,0],
        difference(
             cube([20,40,40]),
             translate([0,20,30],
                 rotate ([0,90,0],
                 cylinder({r:params.pen_d, h:90})
                 ))
            )
        ),

    translate([5,0,0],union(
 rotate([0,0,45],translate([-w/2,-w/2,0],color("black",cube([w,w,h])))),
 translate([0,-w/2,0],color("black",cube([w/2,w,h]))),
 translate([-13.5,-15,-3],color("black",cube([20,40,3]))),
 rotate([0,90,0],translate([-15,-15,3.5],color("black",cube([15,40,3]))))
 ))

 );

}
