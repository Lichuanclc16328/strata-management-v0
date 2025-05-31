<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $email = $_POST['email'] ?? '';
  $password = $_POST['password'] ?? '';

  // 这里写你自己的验证逻辑，例如查询数据库
  if ($email === 'admin@example.com' && $password === '123456') {
    // 登录成功，重定向到 dashboard
    header('Location: /dashboard');
    exit;
  } else {
    // 登录失败，重定向回登录页
    header('Location: /login?error=1');
    exit;
  }
}
?>

