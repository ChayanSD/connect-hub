import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Building2 } from "lucide-react";
import { z } from "zod";
import logo from "../../public/fargoLogo.png"

const authSchema = z.object({
  email: z.string().trim().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/dashboard");
      }
    };
    checkUser();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validatedData = authSchema.parse({ email, password });

      const { error } = await supabase.auth.signInWithPassword({
        email: validatedData.email,
        password: validatedData.password,
      });

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          throw new Error("Invalid email or password");
        }
        throw error;
      }

      toast({
        title: "Welcome back!",
        description: "Successfully signed in",
      });
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Card className="w-full max-w-md p-6 md:p-8">
        <div onClick={() => navigate("/")}  className="flex flex-col items-center mb-8">
        <img src={logo} alt="Fargo Space Logo" className="w-[200px] cursor-pointer h-20 sm:w-[200px] object-cover" />
              <span className="text-[15px] ml-[40px] cursor-pointer pr-7 absolute bg-white  text-gray-400 mt-10 font-semibold tracking-wider">ADMIN</span>
         <p className="text-muted-foreground text-center">
            Sign in to access your dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@company.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-accent to-accent/90"
            disabled={loading}
          >
            {loading ? "Please wait..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-sm"
          >
            Back to Home
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Auth;