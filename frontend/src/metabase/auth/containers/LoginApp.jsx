import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import Img from "../image/logo.svg";
import bg from "../image/background.png"
import { t } from "ttag";
import Canvas from "./Canvas"
import Home from "metabase/auth/containers/test4";
import Example5 from "metabase/auth/containers/test5";
import _ from "underscore";
import AuthScene from "../components/AuthScene";
import LogoIcon from "metabase/components/LogoIcon";

import { getAuthProviders } from "../selectors";
import * as THREE from "three";
import Orbitcontrols from 'three-orbitcontrols';
// import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera'
// import { Scene } from 'three/src/scenes/Scene'
// import { BufferAttribute } from 'three/src/core/BufferAttribute'
// import { BufferGeometry } from 'three/src/core/BufferGeometry'
// import { Color } from 'three/src/math/Color'
// import { Points } from 'three/src/objects/Points'
// import { ShaderMaterial } from 'three/src/materials/ShaderMaterial'
// import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer'

const mapStateToProps = (state, props) => ({
  providers: getAuthProviders(state, props),
});
const style = {
  backgroundColor:"#223151",
  overflow:"hidden"
}
@connect(mapStateToProps)
export default class LoginApp extends Component {
  // three.js 特效测试
//   constructor(props) {
//     super(props);
//     this.state = {  };
//   }
//
//   initThree(){
//     threeStart();
//
//     var renderer,width,height;
//
//     function init() {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       renderer = new THREE.WebGLRenderer({
//         antialias: true
//       });
//       renderer.setSize(width, height);
//       document.getElementById('canvas-frame').appendChild(renderer.domElement);
//       renderer.setClearColor(0x000000, 1.0);
//     }
//
//     var camera;
//     function initCamera() {
//       camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
//       camera.position.set(400,400,400)
//       camera.up.set(0,1,0);
//       camera.lookAt(0,0,0);
//     }
//
//     var scene;
//     function initScene() {
//       scene = new THREE.Scene();
//     }
//
//     var light;
//     function initLight() {
//       light = new THREE.AmbientLight(0xFFFFFF);
//       light.position.set(300, 300, 0);
//       scene.add(light);
//     }
//
//     function initObject() {
//
//       var geometry = new THREE.CubeGeometry(200, 200, 200);
//       var material = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
//       var mesh = new THREE.Mesh(geometry, material);
//       mesh.position.set(0, 0, 0);
//       scene.add(mesh);
//     }
//
//     function threeStart() {
//       init();
//       initCamera();
//       initScene();
//       initLight();
//       initObject();
//       animation();
//
//     }
//     function animation() {
//       renderer.render(scene, camera);
//       requestAnimationFrame(animation);
//     }
//   }
//
//   /**
//    * 开始Three
//    *
//    * @memberof ThreeBim
//    */
//   componentDidMount(){
//     this.initThree();
//   }
//   render() {
//     return (
//       <div id='canvas-frame'>
//       </div>
//     );
//   }
//
//
// }



// 原版
  renderPanel(provider) {
    return <provider.Panel {...this.props} />;
  }
  renderButton(provider) {
    return (
      <Link
        key={provider.name}
        to={provider.Panel ? `/auth/login/${provider.name}` : null}
        className="mt2 block"
      >
        <provider.Button {...this.props} />
      </Link>
    );
  }
  render() {
    const { providers, params } = this.props;
    const selected = _.findWhere(providers, { name: params.provider });
    const visibleProviders = selected ? [selected] : providers;
    const style1={
        // backgroundImage: 'url(' +bg + ')',
        // backgroundSize:"100% 100%",
        // backgroundAttachment:"fixed",
        // backgroundColor: "#7172AD",
      // 四川用：自助式分析平台
        backgroundColor: "rgb(80,158,227)",
      // 自定义分析平台
        // backgroundColor: "rgb(34,49,81)",

    };
    const style2={
      // position:"fixed"
      textAlign:"center"
        // marginTop:"-220px",
        // marginTop:"-350px",
        // position:"fixed"
    };
    const style={
        // margin:"25px auto",
        backgroundColor:"transparent",
        borderColor:"transparent",
        width:"430px",
        // paddingLeft:"50px",
    };
    // const style3={
    //   marginTop: "220px",
    //   fontSize:"0.88em",
    //   fontWeight:"900",
    //   color:"#74838F",
    //   position:"fixed"
    // };
    const style3 = {
      // float:"left",

      marginBottom:"200",
      // position:"fixed",
      // zIndex:"999"

    };
    const style4 = {
      backgroundColor:"#223151",
      margin: "0px",
      overflow: "hidden"
    };
    // let scene;
    // scene = new THREE.Scene();




    return (

      // <canvas width={"1043"} height={"625"} style={style3}>
      <div className="flex flex-column flex-full md-layout-centered" id="app" style={style1}>
        {/*<Home />*/}
        {/*<Example5 className="flex flex-column flex-full md-layout-centered"/>*/}
        {/*<ParticlesBg type="circle" bg={true} />*/}

        {/*<div id='WebGL-output'>*/}
        {/*<canvas width="1043" height="625" style={style3}>*/}


        {/*<div className="Login-wrapper wrapper Grid Grid--full md-Grid--1of2 relative z2">*/}
        {/*  <div className="Grid-cell flex layout-centered text-brand">*/}
        {/*    /!*<LogoIcon className="Logo my4 sm-my0" height={85} />*!/*/}
        {/*    <img src={Img} alt="" width={295} height={150} />*/}
        {/*  </div>*/}
        <div style={style3}>
          {/*竖版logo*/}
          {/*<div style={style2}>*/}
          {/*  /!*<LogoIcon className="Logo my4 sm-my0" height={85} />*!/*/}
          {/*  <img src={Img} alt="" width={295} height={150} />*/}
          {/*</div>*/}
          {/*<div className="Login-content Grid-cell p4 bg-white bordered rounded shadowed"*/}
          {/*     style={style}*/}
          {/*>*/}
          <div className="Login-content Grid-cell p4 bg-white bordered rounded "
               style={style}
          >
            <div style={style2}>
              {/*<LogoIcon className="Logo my4 sm-my0" height={85} />*/}
              <img src={Img} alt="" width={295} height={150} />
            </div>
            {/*<h2 className="Login-header mb2">{t`Sign in to Metabase`}</h2>*/}
            {visibleProviders.length === 1 && visibleProviders[0].Panel ? (
              this.renderPanel(visibleProviders[0])
            ) : (
              <div className="pt2 relative">
                {visibleProviders.map(provider => this.renderButton(provider))}
              </div>
            )}
          </div>
        </div>
        {/*</div>*/}
        {/*<AuthScene />*/}
        {/*<div style={style3}>系统支持@神州数码信息系统有限公司</div>*/}
        {/*</canvas>*/}
        {/*</div>*/}
      </div>
      //
    );
  }
}
