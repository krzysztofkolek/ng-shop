<?php
  $to      =  "tomail"; 
  $subject  = $_POST['email'];
  $message  = $_POST['message'];
  $headers  = 'From: xxx-from' . "\r\n" .
              'MIME-Version: 1.0' . "\r\n" .
              'Content-type: text/html; charset=utf-8';
  if(mail($to, $subject, $message, $headers))
      echo "Email sent";
  else
      echo "Email sending failed";
?>
