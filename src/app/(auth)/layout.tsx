interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="min-h-dvh flex items-center justify-center">{children}</div>;
};

export default AuthLayout;
