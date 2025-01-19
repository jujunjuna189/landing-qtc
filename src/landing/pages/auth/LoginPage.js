import { lgLogo } from "../../assets";
import { Button, FieldPassword, FieldText } from "../../components";
import { UseLoginContext } from "../../contexts/auth/LoginContext";

const LoginPage = () => {
    const { controller, error, onSetController, onLogin } = UseLoginContext();

    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-white-muted flex flex-col items-center pt-[7%]">
            <div className="my-4 w-72">
                <img src={lgLogo} alt="LogoQTC" className="w-full" />
            </div>
            <div className="bg-white-light shadow-all w-96 mt-10">
                <div className="px-10 py-8">
                    <div className="text-center">
                        <span className="text-2xl font-semibold">Log In</span>
                    </div>
                    <div className="text-center">
                        <small>welcome to QTC admin</small>
                    </div>
                    {error?.message && (
                        <div className="mt-8 text-danger-dark">
                            {error?.message}
                        </div>
                    )}
                    <div className="mt-3">
                        <label>Username/Email</label>
                        <FieldText placeholder="..." error={error?.email} value={controller.email} onChange={(value) => onSetController({ field: 'email', value: value })} />
                    </div>
                    {console.log(error)}
                    <div className="mt-1">
                        <label>Password</label>
                        <FieldPassword placeholder="..." error={error?.password} value={controller.password} onChange={(value) => onSetController({ field: 'password', value: value })} />
                    </div>
                    <div className="mt-8">
                        <Button className="text-white-light justify-center" onClick={() => onLogin()}>Log In</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;