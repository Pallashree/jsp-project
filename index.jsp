<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%
try{
String msg = session.getAttribute("msg").toString();
out.println(msg);
session.removeAttribute("msg");
}
catch(Exception e)
{}





%>
</body>
</html>