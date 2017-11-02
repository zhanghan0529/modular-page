define(['jquery','com/GoTop','com/Carousel','com/WaterFallImg'],function($,GoTop,Carousel,WaterFallImg) {
   // console.log(GoTop); 
    new GoTop(); 
    //console.log(Carousel)
    new Carousel($(".cal"));
   //console.log(new WaterFallImg($(".pic-show>ul")));
    new WaterFallImg($(".pic-show>ul"),$(".pic-show .pic-show-btn"));

});