## MY FIRST LANDING PAGE WITH TAILWIND CSS

### <ins>Special thanks to Mr. Oliver Mensah</ins>
#### This project was inspired by  traversymedia and Js mastery.
##### I created this project mainly to showcase my understanding of tailwindcss. This project is a replica of a landing page I found on frontendmentor.com
# INTEGRATED CONTENT
### tailwindcss
### html
### JQUERY
### CSS


## USEFUL LINKS
#### You may visit "https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5" to  enlighten and build upon your frontend skills by replicating already made themes.
#### Project Link: https://landingpgetailwindcss.onrender.com


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
* CSS STYLING FOR THE HAMBURGER  */
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



.open {
  transform: rotate(90deg);
  transform: translateY(0px);
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translate(6px); 
  // rotate buttom rotates the hamburger-top by 45deg (deg-stands for degrees)
}

.open .hamburger-middle {
  display: none;  // this is hidden when the bottom is clicked  
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translate(-6px);
    // rotates buttom rotates the hamburger-bottom by -45deg (where deg stands for degrees)

}

```



/Note: the "open" class shows in the bottom tag upon buttom click and Jquery was used to achieve this. 


```
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

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




##  A BRIEF NOTES ON TAILWIND CSS

**TAILWIND CSS :** A more recent framework,** TailWind CSS**, has recently become well-known for its utility-first philosophy.
As a result, TailWind offers a collection of low-level utility functions that can be combined to create any design, as opposed to predetermined designs.
This gives it a great deal of flexibility and customizability, but it may also make it difficult to understand and operate. 

**BOOTSRAP:**The more seasoned and well-known of the two frameworks is Bootstrap.
It offers a conventional grid-based layout with standard elements like buttons and forms having predefined designs.
This may make things simpler to start, but it may also limit your options. 


Which one ought to you use then?
Find out by reading on.

**What Exactly Is TailWind CSS?**

A **utility-based CSS framework** called TailWind makes producing responsive designs incredibly rapid and simple.
Along with being exceptionally quick, TailWind has a vast library of pre-built components that are easily customizable to meet your unique requirements. 

And if the library doesn't have what you're looking for, you can always make your own special rules.
Because of this, 50,239 websites currently employ TailWind CSS. 

The fact that TailWind does away with the requirement for media queries is one of its best features.
Use the built-in responsive utilities to make sure your designs look amazing on any device rather than creating separate stylesheets for various screen widths.
By doing this, you can save time and maintain cleaner, more readable code. 

Even though TailWind has its limitations, it is still a powerful tool that can assist you in producing original responsive designs.
Hence, TailWind is unquestionably worthwhile looking into if you're searching for a quick and effective way to create flexible websites.

**Benefits of TailWind CSS **
1. Simple To Start With


You don't have to learn a completely new set of standards or rules, unlike with other CSS frameworks.
As TailWind is just standard CSS, your developers already know how to utilize it if they can write CSS.

2. Highly Modifiable


You have total control over the visual style of your website or application when using TailWind.
Because of the tailwind.config.js file, this is possible. 
that enables changing TailWind's default settings.
Your developers will be able to modify any element of the design, including the colors, spacing, and responsiveness.

3. Effective


Even the most complicated designs only require a short amount of CSS to be written because TailWind is such a compact framework.
Also, there is a lower likelihood of errors because your developers don't have to create as much code.

4. Supported Well


A group of skilled experts created and maintains TailWind.
You can be sure that TailWind will continue to satisfy your demands as your project expands because they are always adding new features and upgrades.

5. Simple to Learn


You may start using TailWind right away with the help of a variety of tools, such as blogs, video courses, and tutorials.

Also, when employing TailWind, developers can avoid writing CSS.
This is the reason why more developers are drawn to this framework.
The HTML code might simply have pre-built classes added by a developer.
So, TailWind is a great option for folks who are unfamiliar with CSS or who don't want to write extensive code.

**Drawbacks of TailWind CSS**



- Greater Code


You might not need all of the extra CSS code that TailWind generates for your project.
This may result in a huge final CSS file, which might affect performance.

- More Learning Curve


For TailWind to produce the final CSS file, a compiler (like PostCSS) is necessary.
For individuals who are not familiar with CSS preprocessors, this may present an additional learning curve.

- Possible Learning Barrier


Developers that are unable of creating CSS code can rely on Tailwind as a crutch.
They may begin to rely solely on TailWind's pre-built classes and never truly learn CSS

Overall, TailWind CSS is a great resource for anybody looking for a CSS framework that prioritizes functionality.
When implementing TailWind on your project, it's crucial to be aware of any potential drawbacks.









