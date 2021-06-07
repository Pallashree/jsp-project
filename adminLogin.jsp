<%@page import="java.sql.*"%>
<%
String username1 = request.getParameter("name");

String password1 = request.getParameter("password");
Connection conn=null;
Statement st = null;
ResultSet rs = null;
try
{
	Class.forName("com.mysql.jdbc.Driver");
	conn=(Connection)DriverManager.getConnection("jdbc:mysql://localhost:3306/project3","root","root");
	st = conn.createStatement();
	
	String qry = "select * from admin where name='"+username1+"' and password='"+password1+"' ";
	rs = st.executeQuery(qry);
	
	if(rs.next()){
		String userid = rs.getString(1);
		String name=rs.getString(2);
		
		session.setAttribute("sid",userid);
		session.setAttribute("susername",name);
		response.sendRedirect("welcome.jsp");
	}
	else{
		session.setAttribute("msg","Invalid Username or Password");
		response.sendRedirect("index.html?errMsg=" + session.getAttribute("msg").toString());
	}

}
catch(Exception e)
{
	out.println("Cause:"+e);
}


%>