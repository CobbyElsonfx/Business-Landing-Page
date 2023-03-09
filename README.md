## MY FIRST LANDING PAGE WITH TAILWIND CSS

### <ins>Special thanks to Mr. Oliver Mensah</ins>
#### This project was inspired by  traversymedia and Js mastery.
##### I created this project mainly to showcase my understanding of tailwindcss. This project is a replica of a landing page i found on frontendmentor.com
# INTEGRATED CONTENT
### tailwindcss
### html
### JQUERY
### CSS


## USEFUL LINKS
#### You may visit "https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5/hub" to  enlighten and build upon your frontend zskills by replicating already made themes.


## Usage

Install dependencies (Tailwind)

To build once run...
```
npm run build
npm run watch (for developent)
```




### SOME KEY POINTS I NOTED WHEN USING TAILWINDCSS
1. Tailwind "container" class does not automcatically center the content as in bootstrap and you may have to use mx-auto to keep it centered
2. Always use a relative class to keep the content in position
3. Its a better practice to have the breakpoints classes at the end of each line eg md:bg-white
3. All custom CSS are supposed to be in the input.CSS file
4. When is is compiled it outputs the the css/main.css



### How to make the Hamburger Menu
#### In this tutorial I used Tailwindcss, external css and Jquery to make a hamburger icon , you can also use similar classes in bootstrap to get the same effects.



```
<!-- Hamburger Icon -->
        <button  id="menu-btn" class="block hamburger md:hidden focus:outline-none" >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="md:hidden">
        <div
          id="menu"
          class="absolute  flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>




```


```
* Hamburger Menu */
// target the hamburger class and set the properties as shown below
.hamburger { .     
  cursor: pointer;   
  width: 24px;
  height: 24px;
  transition: all 0.25s; 
  position: relative;   //this enables the  individual hamburger bars to stay in the button
                        //container when position absolute. 
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;      // this enables the individual thin bars  to suspend freely in the buttom container
  top: 0;
  left: 0;
  width: 24px;
  height: 2px;
  background: #000;
  transform: rotate(0);      //this keeps them in the same direction and position for the mean time
  transition: all 0.5s;
}

.hamburger-middle {
  transform: translateY(7px);   // pushes the middle bar  vertically by 7px  (down)
}

.hamburger-bottom {
  transform: translateY(14px);    //
}

//Note: the "open" class shows in the bottom tag upon buttom click and Jquery was used to achieve this. 


```
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

```


.open {
  transform: rotate(90deg);
  transform: translateY(0px);
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translate(6px); 
  // rotate buttom rotates the hamburger-top by 45deg (deg-stands for degrees)
}

.open .hamburger-middle {
  display: none;  // this is hidden when the bottom is click  
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translate(-6px);
    // rotates buttom rotates the hamburger-bottom by -45deg (where deg stands for degrees)

}

```


### STEPS INVOLVED AND POINTS TO NOTE
####  <ins>key notes </ins>
* md:hiddnen - hides the button on larger screens but shows by default on smaller screens
* focus:outline-none
* absolute : positions the menu abosulte (freely suspended)
* flex-col  - aligns the menu in column order 
* space-y-6  : keeps the virtical space between the menu  at 6units
* bg stands for background
* self end : to align an item to the end of the container’s cross axis
* drop-shadow - adds shadow to the menu items






* Make a button with three span tags each with a class of .hamburger
* Include  three span tags,  each with a  class name as  "hamburger-{top,middle,bottom}" indicated above.(Each span tag represents a thin bar since hamburger contains three thin bars)
* Make  div tag with tailwind class hidden on md(medium or higher) screens as this must be shown only on mobile screens 
   1. Make another inner div tag with class name "menu"
      Meaning of tailwind classes used in the inner div tag as show above
      * left-6 and right-6 keeps the menu 6units away from the right and left sides that is , it keeps the menu at the center. Remember the absolute class has been added so not setting the left and right units keeps the menu away from the center. 
      * Note: Using the flex-col class  without the flex class wont effect the changes
      * 

* Style it as shown in the above code sample. (Details are explained)





