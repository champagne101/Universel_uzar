import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import RightSidebar from "@/components/RightSidebar"

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const loggedIn = { firstName: 'Karabo'}


  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1245.36}
          />
        </header>

          RECENT TXs        
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1245.36}, { currentBalance: 12}]}
      />

      
    </section>
  )
}

export default Home