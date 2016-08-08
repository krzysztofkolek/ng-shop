<?php
  $to      =  "chaoshaxa@gmail.com"; 
  $subject  = $_POST['email'];
  $message  = $_POST['message']; 
  $headers  = 'From: haker_666@o2.pl' . "\r\n" .
              'MIME-Version: 1.0' . "\r\n" .
              'Content-type: text/html; charset=utf-8';
  if(mail($to, $subject, $message, $headers))
      echo "Email sent";
  else
      echo "Email sending failed";
?>
