import s from './Auth.module.css'
import PageHeader from "@/shared/ui/page-header"
import AuthorizationForm from "@/widgets/authorization-form"
import RegistrationForm from "@/widgets/registration-form"
import {useState} from "react"
import TabButton from "@/shared/ui/tab-button"
import Hint from "@/shared/ui/hint"


const Auth = () => {
    const [activeTab, setActiveTab] = useState<'authorization' | 'registration'>('authorization')

    return (
        <>
            <main className={s.main}>
                <div className={s.container}>
                    <PageHeader title="Service Top"/>

                    <div className={s.tabButtons}>
                        <TabButton
                            title="Вход"
                            type="button"
                            active={activeTab === 'authorization'}
                            onClick={() => setActiveTab('authorization')}
                        />
                        <TabButton
                            title="Регистрация"
                            type="button"
                            active={activeTab === 'registration'}
                            onClick={() => setActiveTab('registration')}
                        />
                    </div>

                    {activeTab === 'authorization' && <AuthorizationForm/>}
                    {activeTab === 'registration' && <RegistrationForm/>}
                </div>
            </main>
            <Hint/>
        </>
    )
}

export default Auth