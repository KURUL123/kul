gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code = {};
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.localVariables = [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite3Objects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite3Objects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects2= [];


gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(1, 2));
}
}{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1[i].rotateTowardAngle(gdjs.randomFloatInRange(0, 270), 0, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite3Objects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite3Objects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects2.length = 0;

gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList0(runtimeScene);
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSpriteObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite2Objects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite3Objects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite3Objects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDNewSprite4Objects2.length = 0;


return;

}

gdjs['_1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code'] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code;
