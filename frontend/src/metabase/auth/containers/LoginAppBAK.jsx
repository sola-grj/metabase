import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import Img from "../image/logo.svg";
import bg from "../image/background.png"
import { t } from "ttag";

import _ from "underscore";
import AuthScene from "../components/AuthScene";
import LogoIcon from "metabase/components/LogoIcon";

import { getAuthProviders } from "../selectors";
import * as THREE from "three";
import Orbitcontrols from 'three-orbitcontrols';
import Stats from "three/examples/jsm/libs/stats.module";

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
  // constructor(props) {
  //   super(props);
  // }
  //
  // private
  // initThree() {
  //   // threeStart();
  //
  //   var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;
  //
  //   var container;
  //   var camera, scene, renderer;
  //
  //   var particles, particle, count = 0;
  //
  //   var mouseX = 0, mouseY = 0;
  //
  //   var windowHalfX = window.innerWidth / 2;
  //   var windowHalfY = window.innerHeight / 2;
  //
  //   init();
  //   animate();
  //   function init() {
  //
  //     container = document.createElement('div');
  //
  //     document.body.appendChild(container);
  //
  //     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  //     camera.position.z = 1000;
  //
  //     scene = new THREE.Scene();
  //
  //     particles = new Array();
  //
  //     var PI2 = Math.PI * 2;
  //     var material = new THREE.ParticleSystemMaterial({
  //     // var material = new THREE.ParticleSystemMaterial({
  //
  //       color: 0xffffff,
  //       program: function (context) {
  //
  //         context.beginPath();
  //         context.arc(0, 0, 1, 0, PI2, true);
  //         context.fill();
  //
  //       }
  //
  //     });
  //
  //     var i = 0;
  //
  //     for (var ix = 0; ix < AMOUNTX; ix++) {
  //
  //       for (var iy = 0; iy < AMOUNTY; iy++) {
  //
  //         particle = particles[i++] = new THREE.Particle(material);
  //         particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
  //         particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
  //         scene.add(particle);
  //
  //       }
  //
  //     }
  //
  //     renderer = new THREE.CanvasRenderer();
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //     container.appendChild(renderer.domElement);
  //
  //     document.addEventListener('mousemove', onDocumentMouseMove, false);
  //     document.addEventListener('touchstart', onDocumentTouchStart, false);
  //     document.addEventListener('touchmove', onDocumentTouchMove, false);
  //
  //     //
  //
  //     window.addEventListener('resize', onWindowResize, false);
  //
  //   }
  //
  //   function onWindowResize() {
  //
  //     windowHalfX = window.innerWidth / 2;
  //     windowHalfY = window.innerHeight / 2;
  //
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     camera.updateProjectionMatrix();
  //
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //
  //   }
  //
  //   //
  //
  //   function onDocumentMouseMove(event) {
  //
  //     mouseX = event.clientX - windowHalfX;
  //     mouseY = event.clientY - windowHalfY;
  //
  //   }
  //
  //   function onDocumentTouchStart(event) {
  //
  //     if (event.touches.length === 1) {
  //
  //       event.preventDefault();
  //
  //       mouseX = event.touches[0].pageX - windowHalfX;
  //       mouseY = event.touches[0].pageY - windowHalfY;
  //
  //     }
  //
  //   }
  //
  //   function onDocumentTouchMove(event) {
  //
  //     if (event.touches.length === 1) {
  //
  //       event.preventDefault();
  //
  //       mouseX = event.touches[0].pageX - windowHalfX;
  //       mouseY = event.touches[0].pageY - windowHalfY;
  //
  //     }
  //
  //   }
  //
  //   //
  //
  //   function animate() {
  //
  //     requestAnimationFrame(animate);
  //
  //     render();
  //
  //
  //   }
  //
  //   function render() {
  //
  //     camera.position.x += (mouseX - camera.position.x) * .05;
  //     camera.position.y += (-mouseY - camera.position.y) * .05;
  //     camera.lookAt(scene.position);
  //
  //     var i = 0;
  //
  //     for (var ix = 0; ix < AMOUNTX; ix++) {
  //
  //       for (var iy = 0; iy < AMOUNTY; iy++) {
  //
  //         particle = particles[i++];
  //         particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
  //         particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;
  //
  //       }
  //
  //     }
  //
  //     renderer.render(scene, camera);
  //
  //     count += 0.1;
  //
  //   }
  //
  //
  // }
  //
  // /**
  //  * 开始Three
  //  *
  //  * @memberof ThreeBim
  //  */
  // componentDidMount() {
  //   this.initThree();
  // }
  //
  // render() {
  //   return (
  //     <div style={style}>
  //       6667
  //     </div>
  //   );
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
      // backgroundColor: "rgb(34,49,45)"
      backgroundColor: "#7172ad"
    };
    const style2={
      marginTop:"-220px",
      position:"fixed"
    };
    const style={
      // margin:"25px auto",
      backgroundColor:"transparent",
      borderColor:"transparent",
      width:"430px",
      // paddingLeft:"50px",
      position:"fixed"
    };
    // const style3={
    //   marginTop: "220px",
    //   fontSize:"0.88em",
    //   fontWeight:"900",
    //   color:"#74838F",
    //   position:"fixed"
    // };
    const style3 = {
      // width: "835px",
      // height:"500px"
      width: "1536px",
      height:"326px"
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
        {/*<div id='WebGL-output'>*/}
        {/*<canvas width="1043" height="625" style={style3}>*/}


        {/*<div className="Login-wrapper wrapper Grid Grid--full md-Grid--1of2 relative z2">*/}
        {/*  <div className="Grid-cell flex layout-centered text-brand">*/}
        {/*    /!*<LogoIcon className="Logo my4 sm-my0" height={85} />*!/*/}
        {/*    <img src={Img} alt="" width={295} height={150} />*/}
        {/*  </div>*/}

        <div style={style2}>
          {/*<LogoIcon className="Logo my4 sm-my0" height={85} />*/}
          <img src={Img} alt="" width={295} height={150} />
        </div>
        {/*<div className="Login-content Grid-cell p4 bg-white bordered rounded shadowed"*/}
        {/*     style={style}*/}
        {/*>*/}
        <div className="Login-content Grid-cell p4 bg-white bordered rounded "
             style={style}
        >
          {/*<h2 className="Login-header mb2">{t`Sign in to Metabase`}</h2>*/}
          {visibleProviders.length === 1 && visibleProviders[0].Panel ? (
            this.renderPanel(visibleProviders[0])
          ) : (
            <div className="pt2 relative">
              {visibleProviders.map(provider => this.renderButton(provider))}
            </div>
          )}
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
