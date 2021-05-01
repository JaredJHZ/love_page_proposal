import React,{useState} from 'react'
import '../App.css';

import photo1 from '../photos/1.jpeg';
import photo2 from '../photos/2.jpeg';
import photo3 from '../photos/3.jpeg';
import photo4 from '../photos/4.jpeg';
import photo5 from '../photos/5.jpeg';
import photo6 from '../photos/6.jpeg';
import photo7 from '../photos/7.jpeg';
import photo8 from '../photos/8.jpeg';
import photo9 from '../photos/9.jpeg';
import photo10 from '../photos/10.jpeg';
import photo11 from '../photos/11.jpeg';
import photo12 from '../photos/12.jpeg';
import photo13 from '../photos/13.jpeg';
import photo14 from '../photos/14.jpeg';
import photo15 from '../photos/15.jpeg';

export default ({setOn}) => {


    return    <div class="row-photos"> 

    <div class="column-photos">
        <img className=" cursor-pointer " onClick={() => setOn(0)}  src={photo1} style={{width:'100%'}}  />
        <img className=" cursor-pointer"  onClick={() => setOn(1)}  src={photo2} style={{width:'100%'}}  />
        <img className=" cursor-pointer"  onClick={() => setOn(2)}  src={photo3} style={{width:'100%'}}  />
    </div>
    <div class="column-photos">
        <img className=" cursor-pointer"   onClick={() => setOn(3)} src={photo4} style={{width:'100%'}}  />
        <img className=" cursor-pointer"  onClick={() => setOn(4)} src={photo6} style={{width:'100%'}}  />
        <img className=" cursor-pointer"  onClick={() => setOn(5)} src={photo7} style={{width:'100%'}} />
    </div>  
    <div class="column-photos"> 
        <img className=" cursor-pointer"  onClick={() => setOn(6)} src={photo8} style={{width:'100%'}}  />
        <img className=" cursor-pointer"  onClick={() => setOn(7)} src={photo9} style={{width:'100%'}}  />
        <img className=" cursor-pointer"  onClick={() => setOn(8)} src={photo10} style={{width:'100%'}}  />
    </div>
    <div class="column-photos">
        <img className=" cursor-pointer"  onClick={() => setOn(9)} src={photo11} style={{width:'100%'}}  />
        <img className=" cursor-pointer"  onClick={() => setOn(10)} src={photo12} style={{width:'100%'}}  />
        <img className=" cursor-pointer"  onClick={() => setOn(11)} src={photo15} style={{width:'100%'}}  />
    </div>
</div>
}