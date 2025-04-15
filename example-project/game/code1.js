gdjs.XYQCode = {};
gdjs.XYQCode.localVariables = [];
gdjs.XYQCode.GDNewSpriteObjects1= [];
gdjs.XYQCode.GDNewSpriteObjects2= [];
gdjs.XYQCode.GDGreenButtonWithStoneFrameObjects1= [];
gdjs.XYQCode.GDGreenButtonWithStoneFrameObjects2= [];


gdjs.XYQCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithStoneFrame"), gdjs.XYQCode.GDGreenButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.XYQCode.GDGreenButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.XYQCode.GDGreenButtonWithStoneFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.XYQCode.GDGreenButtonWithStoneFrameObjects1[k] = gdjs.XYQCode.GDGreenButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.XYQCode.GDGreenButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Безіменна сцена", false);
}}

}


};

gdjs.XYQCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.XYQCode.GDNewSpriteObjects1.length = 0;
gdjs.XYQCode.GDNewSpriteObjects2.length = 0;
gdjs.XYQCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.XYQCode.GDGreenButtonWithStoneFrameObjects2.length = 0;

gdjs.XYQCode.eventsList0(runtimeScene);
gdjs.XYQCode.GDNewSpriteObjects1.length = 0;
gdjs.XYQCode.GDNewSpriteObjects2.length = 0;
gdjs.XYQCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.XYQCode.GDGreenButtonWithStoneFrameObjects2.length = 0;


return;

}

gdjs['XYQCode'] = gdjs.XYQCode;
