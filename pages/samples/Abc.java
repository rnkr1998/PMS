class Abc
{
    public static void main(String args[])
    {
       // Scanner sc=new Scanner(System.in);
       // int n=sc.nextInt();
       int count=0;
        string a="hsdddae";
        for(int i=0;i<a.length();i++)
        {
            char x=a.charAt(i);
              if(x =='a' || x =='e' || x=='i' || x=="o"|| x=="u")
              {
                  count=count+1;

              }
        }
        System.out.println(count);
        
    }
}