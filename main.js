var rd1 = 0, rd2 = 0, rd3 = 0, score1 = 0, score2 = 0, score3 = 0, scoreFBRating = 0, scoreGoogleRating = 0, scoreYelpRating = 0, scoreFbFollowers = 0, scoreGoogleFollowers = 0, scoreYelpFollowers = 0, scoreAppointment = 0, website_exist_yes = document.querySelector("#web-yes"), website_exist_no = document.querySelector("#web-no");
website_exist_yes.addEventListener("change", function() {
  score1 = 25;
});
website_exist_no.addEventListener("change", function() {
  score1 = 0;
});
var checkScoreArr = ["No", "No", "No", "No"], website_listing_fb_yes = document.querySelector("#webls-fb-yes"), website_listing_fb_no = document.querySelector("#webls-fb-no"), website_listing_yelp_yes = document.querySelector("#webls-yelp-yes"), website_listing_yelp_no = document.querySelector("#webls-yelp-no"), website_listing_bing_yes = document.querySelector("#webls-bing-yes"), website_listing_bing_no = document.querySelector("#webls-bing-no"), website_listing_google_yes = document.querySelector("#webls-google-yes"), 
website_listing_google_no = document.querySelector("#webls-google-no");
website_listing_fb_yes.addEventListener("change", function() {
  score2 += 12.5;
  checkScoreArr[0] = "Yes";
});
website_listing_fb_no.addEventListener("change", function() {
  score2 -= 12.5;
  "Yes" === checkScoreArr[0] && (score2 -= 12.5);
});
website_listing_yelp_yes.addEventListener("change", function() {
  score2 += 12.5;
  checkScoreArr[1] = "Yes";
});
website_listing_yelp_no.addEventListener("change", function() {
  score2 -= 12.5;
  "Yes" === checkScoreArr[1] && (score2 -= 12.5);
});
website_listing_bing_yes.addEventListener("change", function() {
  score2 += 12.5;
  checkScoreArr[2] = "Yes";
});
website_listing_bing_no.addEventListener("change", function() {
  score2 -= 12.5;
  "Yes" === checkScoreArr[2] && (score2 -= 12.5);
});
website_listing_google_yes.addEventListener("change", function() {
  score2 += 12.5;
  checkScoreArr[3] = "Yes";
});
website_listing_google_no.addEventListener("change", function() {
  score2 -= 12.5;
  "Yes" === checkScoreArr[3] && (score2 -= 12.5);
});
var correct_info_fb_checkbox = document.querySelector("#correct-info-fb-checkbox"), correct_info_yelp_checkbox = document.querySelector("#correct-info-yelp-checkbox"), correct_info_google_checkbox = document.querySelector("#correct-info-google-checkbox"), correct_info_bing_checkbox = document.querySelector("#correct-info-bing-checkbox");
correct_info_fb_checkbox.addEventListener("change", function() {
  score3 = correct_info_fb_checkbox.checked ? score3 + 6.25 : score3 - 6.25;
});
correct_info_yelp_checkbox.addEventListener("change", function() {
  score3 = correct_info_yelp_checkbox.checked ? score3 + 6.25 : score3 - 6.25;
});
correct_info_google_checkbox.addEventListener("change", function() {
  score3 = correct_info_google_checkbox.checked ? score3 + 6.25 : score3 - 6.25;
});
correct_info_bing_checkbox.addEventListener("change", function() {
  score3 = correct_info_bing_checkbox.checked ? score3 + 6.25 : score3 - 6.25;
});
var facebook_rating_slider = document.querySelector("#facebook-rating-slider"), google_rating_slider = document.querySelector("#google-rating-slider"), yelp_rating_slider = document.querySelector("#yelp-rating-slider");
facebook_rating_slider.addEventListener("change", function() {
  scoreFBRating = calculateSliderValue(facebook_rating_slider.value);
});
google_rating_slider.addEventListener("change", function() {
  scoreGoogleRating = calculateSliderValue(facebook_rating_slider.value);
});
yelp_rating_slider.addEventListener("change", function() {
  scoreYelpRating = calculateSliderValue(yelp_rating_slider.value);
});
function calculateSliderValue(a) {
  switch(a) {
    case "0":
      return 0;
    case "5":
      return 5;
    case "10":
      return 10;
    case "15":
      return 15;
    case "20":
      return 20;
  }
}
var facebook_follower_slider = document.querySelector("#facebook-follower-slider"), google_follower_slider = document.querySelector("#google-follower-slider"), yelp_follower_slider = document.querySelector("#yelp-follower-slider");
facebook_follower_slider.addEventListener("change", function() {
  scoreFbFollowers = fbFollowSwitch(facebook_follower_slider.value);
});
function fbFollowSwitch(a) {
  switch(a) {
    case "0":
      return 0;
    case "5":
      return 3;
    case "10":
      return 6;
    case "15":
      return 10;
    case "20":
      return 15;
  }
}
google_follower_slider.addEventListener("change", function() {
  var a = google_follower_slider.value;
  scoreGoogleFollowers = googleFollowSwitch(a);
  console.log("userinput", a);
  console.log(scoreGoogleFollowers);
});
function googleFollowSwitch(a) {
  switch(a) {
    case "0":
      return 0;
    case "5":
      return 3;
    case "10":
      return 6;
    case "15":
      return 10;
    case "20":
      return 15;
  }
}
yelp_follower_slider.addEventListener("change", function() {
  scoreYelpFollowers = yelpFollowSwitch(yelp_follower_slider.value);
});
function yelpFollowSwitch(a) {
  switch(a) {
    case "0":
      return 0;
    case "5":
      return 2;
    case "10":
      return 4;
    case "15":
      return 7;
    case "20":
      return 10;
  }
}
var wab_yes = document.querySelector("#website-apt-yes"), wab_no = document.querySelector("#website-apt-no");
wab_yes.addEventListener("change", function() {
  scoreAppointment += 20;
});
wab_no.addEventListener("change", function() {
  0 < scoreAppointment && (scoreAppointment -= 20);
});
var facebook_a_b_yes = document.querySelector("#fb-apt-yes"), facebook_a_b_no = document.querySelector("#fb-apt-no");
facebook_a_b_yes.addEventListener("change", function() {
  scoreAppointment += 20;
});
facebook_a_b_no.addEventListener("change", function() {
  0 < scoreAppointment && (scoreAppointment -= 20);
});
var yelp_a_b_yes = document.querySelector("#yelp-apt-yes"), yelp_a_b_no = document.querySelector("#yelp-apt-no");
yelp_a_b_yes.addEventListener("change", function() {
  scoreAppointment += 20;
});
yelp_a_b_no.addEventListener("change", function() {
  0 < scoreAppointment && (scoreAppointment -= 20);
});
var google_a_b_yes = document.querySelector("#google-apt-yes"), google_a_b_no = document.querySelector("#google-apt-no");
google_a_b_yes.addEventListener("change", function() {
  scoreAppointment += 20;
});
google_a_b_no.addEventListener("change", function() {
  0 < scoreAppointment && (scoreAppointment -= 20);
});
var bing_a_b_yes = document.querySelector("#bing-apt-yes"), bing_a_b_no = document.querySelector("#bing-apt-no");
bing_a_b_yes.addEventListener("change", function() {
  scoreAppointment += 20;
});
bing_a_b_no.addEventListener("change", function() {
  0 < scoreAppointment && (scoreAppointment -= 20);
});
var submitButton = document.querySelector("#result-submit");
submitButton.addEventListener("click", function() {
  submit();
});
function submit() {
  var a = document.querySelector("#result1"), d = document.querySelector("#result2"), e = document.querySelector("#result3"), b = scoreFBRating + scoreGoogleRating + scoreYelpRating + scoreFbFollowers + scoreGoogleFollowers + scoreYelpFollowers, c = scoreAppointment;
  ar = score1 + score2 + score3;
  0 > ar && (ar = 0);
  a.innerHTML = ar;
  d.innerHTML = b;
  e.innerHTML = c;
  rd1 = ar;
  rd2 = b;
  rd3 = c;
}

//code to give score color ends

var db = document.querySelector("#db_pdf");
db.addEventListener("click", function() {
 /* window.open("https://ziey3b.csb.app/?r1=" + rd1 + "&r2=" + rd2 + "&r3=" + rd3, "_blank"); */
  
    window.open("https://webninja09.github.io/zenoti_trial/?r1=" + rd1 + "&r2=" + rd2 + "&r3=" + rd3, "_blank"); 

});
