<template>
<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#" id="month" value="1">1 Month</a>
    <a href="#" id="month" value="2">2 Month</a>
    <a href="#" id="month" value="3">3 Month</a>
    <a href="#" id="month" value="4">4 Month</a>
    <a href="#" id="month" value="5">5 Month</a>
    <a href="#" id="month" value="6">6 Month</a>
    <a href="#" id="month" value="7">7 Month</a>
    <a href="#" id="month" value="8">8 Month</a>
    <a href="#" id="month" value="9">9 Month</a>
    <a href="#" id="month" value="10">10 Month</a>
    <a href="#" id="month" value="11">11 Month</a>
    <a href="#" id="month" value="12">12 Month</a>
  </div>
</div>
</template>

<style scoped>
/* Dropdown Button */
.dropbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 24px 16px 24px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  overflow: visible;
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 121px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 7px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>
