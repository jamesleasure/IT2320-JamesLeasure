using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InClass02
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("hello Will");
            //Console.WriteLine("hello Esther");
            //Console.WriteLine("hello Mike");
            //Console.WriteLine("hello Julie");

            //Console.WriteLine("hello \"world\"");

            //string name = "Jude";
            //string greeting;
            //greeting = "hello";

            Console.Write("Enter a name: ");
            string name = Console.ReadLine();

            string greeting;
            Console.Write("Enter greeting: ");
            greeting = Console.ReadLine();

            // using Console.WriteLine formatting
            Console.WriteLine("{1} says {0}", greeting, name);

            // using string concatenation
            Console.WriteLine(greeting + " " + name);

            // using interpolated expressions
            Console.WriteLine($"{greeting} {name}");

            /*
            int
            float
            double
            decimal
            char
            bool

            int intPi = 22 / Convert.ToInt32("7");
            float floatPi = 22f / 7f;
            double doublePi;
            decimal decimalPi;
            doublePi = 22d / 7d;
            decimalPi = 22m / 7m;

            Console.WriteLine("int Pi: " + intPi);
            Console.WriteLine("float Pi: " + floatPi);
            Console.WriteLine("double Pi: " + doublePi);
            Console.WriteLine("decimal Pi: " + decimalPi);
            
            */

        }
    }
}
