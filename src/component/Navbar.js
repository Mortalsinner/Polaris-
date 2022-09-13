import React, { useState } from "react";


export default function Navbar(){

    return(

        <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">Polaris+</a>
        </div>
        <div class="flex-none gap-2">
          <div class="form-control">
            {/* <input type="text" placeholder="Search" class="input input-bordered" /> */}
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://cdn1-production-images-kly.akamaized.net/NiovvlalpCRPUM0TLj4Gz4Pr1l0=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/658990/original/nasa-logo-meatball.jpg"/>
              </div>
            </label>
          


              {/* <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li> */}
              {/* <li><a>About</a></li> */}

              {/*  */}
              {/* <li><a>Logout</a></li> */}


            
          </div>
        </div>
      </div>

    )

}
