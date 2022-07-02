console.log('Everything is Working fine');

const body = document.body;

const div = document.createElement("div");
div.className = '__main';
body.append(div);

const div2 = document.createElement("div"); 
div2.className = 'main_heading';
div.append(div2);

const header = document.createElement("header");
header.className = 'navbar';
div2.append(header);

const div3 = document.createElement("div");
div3.className = 'title_h1';
header.append(div3);

const heading1 = document.createElement("h1");
div3.append(heading1);
heading1.textContent = 'CodeWithHarry';

const div4 = document.createElement("div");
div4.className = 'nav_link';
header.append(div4);

const a1 = document.createElement("a");
const a2 = document.createElement("a");
const a3 = document.createElement("a");
const a4 = document.createElement("a");
div4.append(a1, a2, a3, a4);
a1.textContent = 'Home';
a2.textContent = 'Courses';
a3.textContent = 'Blog';
a4.textContent = 'Contact';

const button1 = document.createElement("button");
const button2 = document.createElement("button");
button1.className = 'nav_btn';
button2.className = 'nav_btn';
div4.append(button1, button2);
button1.textContent = 'Login';
button2.textContent = 'Signup';

//This JS is for content1

const div5 = document.createElement("div");
div5.className = 'content1';
div.append(div5);

const div6 = document.createElement("div");
div6.className = 'left_content';
div5.append(div6);

const div7 = document.createElement("div");
div7.className = 'left_subcontent';
div6.append(div7);

const heading2 = document.createElement("h1");
div7.append(heading2);
heading2.textContent = 'Welcome to ';

const span1 = document.createElement("span");
heading2.append(span1);
span1.id = 'title';
span1.textContent ='CodeWithHarry';

const para1 = document.createElement("p");
div7.append(para1);
para1.textContent = `Confused on which course to take? I have got you covered. Browse
courses and find out the best course for you. Its free! Code With
Harry is my attempt to teach basics and those coding techniques to
people in short time which took me ages to learn.`;

const div8 = document.createElement("div");
div8.className = 'left_buttons';
div6.append(div8);

const button3 = document.createElement("button");
const button4 = document.createElement("button");
button3.className = 'cnt1btn';
button3.id = 'free';
button3.textContent = 'Free Courses';
button4.className = 'cnt2btn';
button4.id = 'explore';
button4.textContent = 'Explore Blog';
div8.append(button3, button4);

const div9 = document.createElement("div");
div9.className = 'right_img';
div5.append(div9);

const img = document.createElement("img");
img.src = 'p3img.png';
div9.append(img);

//This JS is for content2

const div10 = document.createElement("div");
div10.className = 'content2';
div.append(div10);

const heading3 = document.createElement("h2");
heading3.className = 'h2_headings';
heading3.textContent = 'Recommended Courses';
div10.append(heading3);

const div11 = document.createElement("div");
div11.className = 'card_collector';
div10.append(div11);

//This JS is for left card_c2

const div12 = document.createElement("div");
div12.className = 'card_c2';
div11.append(div12);

const div13 = document.createElement("div");
div13.className = 'left_div1';
div12.append(div13);

const img1 = document.createElement("img");
img1.className = 'w_full';
img1.src = 'p3_left_c2img.png';
div13.append(img1);

const div14 = document.createElement("div");
div14.className = 'other_than_img';
div12.append(div14);

const div15 = document.createElement("div");
div15.className = 'left_div2';
div14.append(div15);

const span2 = document.createElement("span");
span2.className = 'free_course';
span2.innerHTML = 'Free Course <br>';
div15.append(span2);

const a5 = document.createElement("a");
a5.className = 'course_heading';
a5.textContent = 'Tailwind Course In Hindi';
div15.append(a5); 

const div16 = document.createElement("div");
div16.className = 'left_div3';
div14.append(div16);

const para2 = document.createElement("p");
para2.className = 'course_description';
para2.textContent = `Complete Tailwind CSS Course by CodeWithHarry in Hindi - Learn
Tailwind CSS from scratch for free!`;
div16.append(para2);

const div17 = document.createElement("div");
div17.className = 'left_div4';
div14.append(div17);

const span3 = document.createElement("span");
span3.className = 'button';
span3.textContent = 'Start Watching';
div17.append(span3);

//This JS is for centre card_c2

const div18 = document.createElement("div");
div18.className = 'card_c2';
div11.append(div18);

const div19 = document.createElement("div");
div19.className = 'center_div1';
div18.append(div19);

const img2 = document.createElement("img");
img2.className = 'w_full';
img2.src = 'p3_center_c2img.png';
div19.append(img2);

const div20 = document.createElement("div");
div20.className = 'other_than_img';
div18.append(div20);

const div21 = document.createElement("div");
div21.className = 'center_div2';
div20.append(div21);

const span4 = document.createElement("span");
span4.className = 'free_course';
span4.innerHTML = 'Free Course <br>';
div21.append(span4);

const a6 = document.createElement("a");
a6.className = 'course_heading';
a6.textContent = 'Next.js Tutorials For Beginners';
div21.append(a6); 

const div22 = document.createElement("div");
div22.className = 'center_div3';
div20.append(div22);

const para3 = document.createElement("p");
para3.className = 'course_description';
para3.textContent = `Complete Next.js Course by CodeWithHarry in Hindi - Learn
Next.js from Scratch.`;
div22.append(para3);

const div23 = document.createElement("div");
div23.className = 'center_div4';
div20.append(div23);

const span5 = document.createElement("span");
span5.className = 'button';
span5.textContent = 'Start Watching';
div23.append(span5);

//This JS is for Right Card_c2

const div24 = document.createElement("div");
div24.className = 'card_c2';
div11.append(div24);

const div25 = document.createElement("div");
div25.className = 'right_div1';
div24.append(div25);

const img3 = document.createElement("img");
img3.className = 'w_full';
img3.src = 'p3_right_c2img.png';
div25.append(img3);

const div26 = document.createElement("div");
div26.className = 'other_than_img';
div24.append(div26);

const div27 = document.createElement("div");
div27.className = 'right_div2';
div26.append(div27);

const span6 = document.createElement("span");
span6.className = 'free_course';
span6.innerHTML = 'Free Course <br>';
div27.append(span6);

const a7 = document.createElement("a");
a7.className = 'course_heading';
a7.textContent = 'React Js Tutorials For Beginners';
div27.append(a7); 

const div28 = document.createElement("div");
div28.className = 'right_div3';
div26.append(div28);

const para4 = document.createElement("p");
para4.className = 'course_description';
para4.textContent = `React is a free and open-source front-end JavaScript library.
This series will cover React from starting to the end. We will
learn react from the ground up!`;
div28.append(para4);

const div29 = document.createElement("div");
div29.className = 'right_div4';
div26.append(div29);

const span7 = document.createElement("span");
span7.className = 'button';
span7.textContent = 'Start Watching';
div29.append(span7);

//This JS is for Content3

const div30 = document.createElement("div");
div30.className = 'content3';
div.append(div30);

const heading4 = document.createElement("h2");
heading4.className = 'h2_headings';
heading4.textContent = 'Testimonials';
div30.append(heading4);

const div31 = document.createElement("div");
div31.className = 'boxes';
div30.append(div31);

//This is for both_box classes left box

const div32 = document.createElement("div");
div32.className = 'both_box';
div31.append(div32);
div32.textContent = '❞';

const para5 = document.createElement("p");
para5.className = 'box_text';
div32.append(para5);
para5.textContent = `I don't have words to thank this man, I'm really grateful to have
this channel and website in my daily routine. If you're a mere
beginner, then you can trust this guy and can put your time into
his content. I can assure you that it'll be worth it.`;

const span8 = document.createElement("span");
span8.className = 'box_author';
div32.append(span8);

const span9 = document.createElement("span");
span9.className = 'author_name';
span9.textContent = 'Mohit Kumar';
span8.append(span9);

const span10 = document.createElement("span");
span10.className = 'author_post';
span10.textContent = 'Web Developer';
span8.append(span10);

//This is for both_box right sided box


const div33 = document.createElement("div");
div33.className = 'both_box';
div31.append(div33);
div33.textContent = '❞';

const para6 = document.createElement("p");
para6.className = 'box_text';
div33.append(para6);
para6.textContent = `For everyone who wants to level up their #Coding and #Dev skills -
seriously, this channel is for you! Both basic and advanced stacks
are covered on this channel, and one can learn according to his
skill levels. And the icing on the cake is, everything is
available for free.`;

const span11 = document.createElement("span");
span11.className = 'box_author';
div33.append(span11);

const span12 = document.createElement("span");
span12.className = 'author_name';
span12.textContent = 'Rakesh Shetty';
span11.append(span12);

const span13 = document.createElement("span");
span13.className = 'author_post';
span13.textContent = 'Web Developer';
span11.append(span13);

//This JS is for class content4 

const div34 = document.createElement("div");
div34.className = 'content4';
div.append(div34);

const footer1 = document.createElement("footer");
footer1.className = 'footer_last';
div34.append(footer1);

const footerDiv = document.createElement("div");
footerDiv.className = 'footer_div';
footer1.append(footerDiv);

const span14 = document.createElement("span");
span14.className = 'logo_title';
footerDiv.append(span14);

const img4 = document.createElement("img");
img4.className = 'logo';
img4.src = 'p3_logo_footer.png';
img4.alt = 'logo';
span14.append(img4);

const span15 = document.createElement("span");
span15.className = 'ftr_title';
span15.textContent = 'CodeWithHarry';
footerDiv.append(span15);

const para7 = document.createElement("p");
para7.className = 'copyright'
para7.textContent = `Copyright © 2022 CodeWithHarry.com`;
footerDiv.append(para7);

























