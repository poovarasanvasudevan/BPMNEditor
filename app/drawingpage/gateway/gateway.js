"use strict";
var gatewaydevider = function (eid,subElement,svg,xvalue,yvalue){  
var g2 = svg.append('g')
        .attr('transform', 'translate(' + xvalue + ',' + yvalue + ')')
        .attr('id', 'gateway' + (++idgatewayelement))
        .call(drag);
      //  
                    //.attr("transform", "matrix(0.7,0.7,-0.7,0.7," + d3.event.pageX + "," + d3.event.pageY + ")")

        if (subElement === "exclusive") {
                
                  g2.append('path')
        .attr("d","m 12.8,12 5.942857142857143,7.771428571428571 -5.942857142857143,7.771428571428571,2.742857142857143,0 4.571428571428571,-5.971382857142857 4.571428571428571,5.971382857142857,2.742857142857143,0 -5.942857142857143,-7.771428571428571 5.942857142857143,-7.771428571428571,-2.742857142857143,0 -4.571428571428571,5.971382857142857 -4.571428571428571,-5.971382857142857,-2.742857142857143,0 z")   
        .attr("transform","matrix(1.4375,0,0,1.4375,-28.9375,1.9375)")
          // .call(drag) ;

           }else if (subElement === "parallel") {


                g2.append('path')
        .attr("d","M11.25,20.5L30.25,20.5M20.5,11.25L20.5,30.25")   
        .attr("stroke-width", "4")
        .attr("fill", "none")
        .attr("stroke", "#808080")   
        .attr("transform","matrix(1,0,0,1,-21,9)")

                
           }else if (subElement === "inclusive") {

              g2.append('circle')
        .attr("r","12.428571428571429")   
        .attr("stroke-width", "4")
        .attr("fill", "none")
        .attr("stroke", "#808080")   
        .attr("cx", "0")
        .attr("cy", "30")   
        // .attr("transform","matrix(1,0,0,1,-21,9)")
     
           }else if (subElement === "event") {

            g2.append('circle')
        .attr("r","14.428571428571429")   
        .attr("stroke-width", "1")
        .attr("fill", "none")
        .attr("stroke", "#808080")   
        .attr("cx", "0")
        .attr("cy", "30"); 

        g2.append('circle')
        .attr("r","12.428571428571429")   
        .attr("stroke-width", "1")
        .attr("fill", "none")
        .attr("stroke", "#808080")   
        .attr("cx", "0")
        .attr("cy", "30"); 

        g2.append('path')
        .attr("d","M24.827514,26.844972L15.759248000000001,26.844216L12.957720300000002,18.219549L20.294545,12.889969L27.630481000000003,18.220774L24.827514,26.844972Z")   
        .attr("stroke-width", "1.5")
        .attr("fill", "none")
        .attr("stroke", "#808080")   
        .attr("transform","matrix(1,0,0,1,-20,9)")

           }

         g2.append('rect')
            .attr('id', 'gateway' + idgatewayelement)
            .style("stroke", "black")
            .style("stroke-width", "2")
            .style("stroke-linecap", "butt")
            .style("stroke-linejoin", "miter")
            .style("stroke-miterlimit", "2")
            .style("stroke-dashoffset", "0")
            .style("fill-opacity", "0")
          //  .style("fill", "white")
            .attr("ry", 0)
            .attr("width", 42.8)
            .attr("height", 42.8)
           .attr("transform", "matrix(0.7,0.7,-0.7,0.7,0,0)")
            .on("dragend", function () { 
                console.log("drag start event")
             })
            .on("mouseover", function () {
                d3.select(this).style("fill", "aliceblue");
            })
            .on("mouseup", function () {
                d3.select(this).style("fill", "aliceblue");
                var t = d3.select(this).attr("id");

                function getScreenCoords(x, y, ctm) {
                    var xn = ctm.e + x * ctm.a + y * ctm.c;
                    var yn = ctm.f + x * ctm.b + y * ctm.d;
                    return {x: xn, y: yn};
                }

                var circle = document.getElementById(t),
                    cx = +circle.getAttribute('cx'),
                    cy = +circle.getAttribute('cy'),
                    ctm = circle.getCTM(),
                    coords = getScreenCoords(cx, cy, ctm);
                console.log(coords.x, coords.y);

                tooltipDiv.transition()
                    .duration(200)
                    .style("opacity", 1.9);

                tooltipDiv.html("<input id=" + "trash-button" + " type=" + "image" + " title=" + "End Event" + " src=" + "img/trash-icon.png" + " alt=" + "trash" + " style=" + "width:25px;" + " >"+"&nbsp"+"<input id=" + "arrow-button" + " type=" + "image" + " title=" + "End Event" + " src=" + "img/arrow.png" + " alt=" + "arrow" + " style=" + "width:25px;" + " >" + "<br>" + "<input id=" + "property-button" + " type=" + "image" + " title=" + "End Event" + " src=" + "img/settingsicon.png" + " alt=" + "trash" + " style=" + "width:25px;" + " >")
                    .style("left", coords.x + 30 + "px")
                    .style("top", (coords.y + 10) + "px");


                tooltipDiv.select("#trash-button").on("click", function () {
                    tooltipDiv.style("opacity", 0);
                    deleteElement(t);
                    // semodal.style.display = "block";
                });

                tooltipDiv.select("#property-button").on("click", function () {
                    tooltipDiv.style("opacity", 0);
                    console.log("end evnt button clicked ")
                    gmodal.style.display = "block";
                });
                tooltipDiv.select("#arrow-button").on("click", function () {
                    tooltipDiv.style("opacity", 0);
                    console.log("end arrow button clicked ");
                    starttype = "gateway";
                    startid =t;
                    startx = coords.x;
                    starty = coords.y;
                    window.bpmnElement = "flowselect";
                    document.body.style.cursor = "e-resize";

                });
            })
            .on("mouseout", function () {
                d3.select(this).style("fill", "white");
                tooltipDiv.transition()
                    .duration(3200)
                    .style("opacity", 0);
            })
            .on("click", function () {
                // gmodal.style.display = "block";
                d3.select(this).style("fill", "white");
                var t = d3.select(this).attr("id");
                function getScreenCoords(x, y, ctm) {
                    var xn = ctm.e + x * ctm.a + y * ctm.c;
                    var yn = ctm.f + x * ctm.b + y * ctm.d;
                    return {x: xn, y: yn};
                }

                var circle = document.getElementById(t),
                    cx = +circle.getAttribute('cx'),
                    cy = +circle.getAttribute('cy'),
                    ctm = circle.getCTM(),
                    coords = getScreenCoords(cx, cy, ctm);

                if (window.bpmnElement === "flow") {
                    starttype = "gateway";
                    startid =t;
                    startx = coords.x;
                    starty = coords.y;
                    window.bpmnElement = "flowselect";
                    document.body.style.cursor = "e-resize";
                    console.log("ok1")
                    console.log(startx)
                    console.log(starty)
                } else if (window.bpmnElement === "flowselect") {
                    endtype = "gateway"
                    endid =t;
                    window.bpmnElement = null
                    if (coords.x > startx) {
                        if (starttype === "startEvent") {
                            startx = startx + 20;
                            starty = starty;  
                        }else if (starttype === "task") {
                          //  startx = startx + 120;
                          startx = startx + taskwidth;
                            starty = starty + 40;
                        }else if (starttype === "gateway") {
                            startx = startx + 30;
                            starty = starty + 30;
                        }
                        endx = coords.x - 35;
                        endy = coords.y + 30;
                    }else if (coords.x < startx) {
                        if (starttype === "startEvent") {
                            startx = startx - 20;
                            starty = starty;  
                        }else if (starttype === "task") {
                            startx = startx - 2;
                            starty = starty + 40;
                        }else if (starttype === "gateway") {
                            startx = startx - 30;
                            starty = starty + 30;
                        }
                        endx = coords.x + 35;
                        endy = coords.y + 30;
                    }
                    
                    endid =t;
                    midx = startx + ((endx - startx) / 2);
                    flowcreator();

                  
                }
            })
         //   .call(drags)

          
              if (eid === null) {
                eid ='gateway'+idgatewayelement;
            }

              EventBPMNJsonCreator(eid, xvalue, yvalue, 120, 80,"gateway",subElement);
              subElement = null;

 }

