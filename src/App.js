import './App.css';
import logo from '../src/assets/logo.png'
import pic1 from '../src/assets/1.png'
import pic2 from '../src/assets/2.png'
import pic3 from '../src/assets/3.png'
import phone from '../src/assets/phone-call-svgrepo-com.svg'
import facebook from '../src/assets/facebook.svg'

function App() {
  return (
    <div >
      <header className="app">
        <img className="app-logo" src={logo} alt="" />
      </header>
      <section className='wrap'>
        <div className='pic1'>
          <img src={pic1} alt="" />
        </div>
        <div className='pic2'>
          <h4> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
          <ul>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
          </ul>

          <img src={pic2} alt="" />
          <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </section>
      <section className='pic3'>
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
        <div className="app">
          <img src={pic3} alt="" />
          <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
          <hr />
          <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
          <p>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
        </div>
      </section>

      <footer >

        <div className='last'>
          <img style={{ width: '20px', height: '22px', backgroundColor: 'white' }} src={phone} alt="" />
          <p>Tool free 1800 200 1234</p>
        </div>
        <div className='last'>
          <img style={{ width: '20px', height: '22px', backgroundColor: 'white' }} src={facebook} alt="" />
          <p>www.facebook.com/cripumps</p>
        </div>
        <div className='last'>
          <img style={{ width: '20px', height: '22px', backgroundColor: 'white' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAHNklEQVR4nO2ba4hVVRTHf/cYlTo6Pi6GqTM1JYGjM2Po9DDoQRgSFYVSQmWZmVFSQaYU9MRQgh7khyAfPaCPFYX0oOxhUY6VjxwVTWXUSZlGJ3PMSL23D2vtOeeee+65Z5977p1R+sPhHM5ea++11n6tvffaKSqDqcBlQD1wITBcn6Ga3gUc0mcP0AqsAz6vkHyJY4Tnez6QAbIBj0FQWgZ4uECefRKDgXnAj8Ak/fcghZUvZgBjhLlKM0nznqdl9RkMABYBhxGhH9f/VwInKKxcFANkNY/Lle4J/XcYWKhl9xpSwGygHVfYdYADVAO7CVcsqgGywC6k1h1gved/u8qQKpuWBTAa+NQn5Cncpr+S4krZGCALLFfayVqWN+0TYFTiWhbADGTULiRgU4CASRjgFNCg9EEG7gKmJ6xrHh4hWLl/kekNZOqKopCtAUxNA9QRPL5kgGcpU5d4NUSwFUpznYUycQyQBa5RnrBu9kqCevegCmkB+wMKbFKajyyVMbDh+UB5GgLSDiItoDoppVPAi8BNuM3qXGAW8C3S5Nbp/1rgpKUyBjY8J4Ea5WtRGdYAdwLn6H8HuA1YQond4XlPwRs0U8eTPhYZlUEMZaNIXANktSyQWafOk08/YCbwq4f2ubjK30GwF7cbeBq3FgxqgHuAt5F5O0kDZIAdyFhzF/lTXh3wArCvAO+MQkoWah61wCbC+1IGWAo8qflkfelDkH46AZkhxuiTRsaTQfoA/Akc1ecwsFeV2YPU5mZN88LxyLAgRBeTf4PmWRQO8A3RavBR5VkKbERmiluAkVEKssQYZJ5fhqwWl+r/xyLK+hUBRgqy2mzcaa0YxqswvwATfWkdSCtqBdqQWv0dWfJ2IzXarbTVSKuoAoYhnmYN0hLHad7DfPn/jIwB45FWEgWzgHfCCAapkFEs2o4YcDjRPb+kBsGslplWGaLKfBDfStI7ooP0pajN9wvN9PqAfCoBB3GKssCXEXnOw+22PZkYVAEPWQjQou+rLHiShim7JZQqF/PxLKO9BphDfj8LwwZ9N4VSlRdm3NkQSpWLNHBfUILXeYjS/6qQ/nfEgi/JMSCrZadUFptxaItf+UstC96mfGNLED4JA2RxPcHtlnwN4HaBmX6LFIExQL0lXzkwQd/bQqnyMRNcA9xgydym7wss+cqBWn3vteSbCmKAEYgzYQNT2BhLvnLAyBDJzfWgCUg7wBTsl4ymsL5kgLZQqnw4wBQH+9oH1wCjY/AmDSPD/hi89XEN8Je+h8TgTRpmxepfLUZBvUO8gexvfQ+MwZs0qvTdHUoVjDoH8YxsYQrrSwY4FoM37SCrOVuYwqpCqSoDUwlxWkAc3f/HGYUUsl9mu4/eH/gHOI5sk5dSPuSuC2xxHFne9scdnKOiy0G2qGxh+l2cgSdplDIgd54JBjAyxDHAIQfZ57eFKcy2yZUDpgXEmZF2OciurS3MxmJXDN6kcUTfccJmtjoE7I5EgFmAxPG/k0Yp65JWB1iLnLDYwBjAdg1eDhgZakOp8pEBvneATuxbgTkXtF2DlwNxl+ab0FkA4DNLZmNt2zV4OWBagP+wthhygjAnYrehuF35LrbkK8emqAnN2WHJZ+KNerDZgrmvbIt3EW9bvGfm8x6MLCc6HKBRM9tswZc0NqkMTdgdz71hPrxMK7DzCs2pzEYLnqRhyvafTIehE8/pt9cAx5Cz96ho1vdaC56k8Z2+m0OpcvE6IR5sFbmhr2HP6Xg8fgCfx3iWzwDdwFPAqkIW8uB85GRoC9IX/c2wHRkftiJTVRtugMQxchdS1ciSdqAqNRKZamuQAIlG8o/tNyLNeUJAWiEsxN3QLQgH+JpoFjVn7UuAn4CXgBuJt89YDCOQcL2XkdPgJfo/aojMGgLOP/wtAMRFvBup1bBt71O4x+mLAtLTSM2NR+bqGsRfH450tQG4QVJHkRbRDfyBtJ69yEq1FantDuBjfbwwXbBfiKxdSHhMNoQmD7cTHCa3E4kMCwpVmwu8R3A0aaljQBvwLhLD5Pf7RyNdd2cAX4YSgqi9gZLrgZvJbUbjcC8zLI6oSBKDoAmUbAYu8eSTUhm9dwqeiau8yXAxMM3zbyDu1ZgsbnhKDb0TKptFpsM5yL6gwTQkeDKxyPHBSLD0gQChTJjMh5bKGNjwvK88jQFpHUiw9FDKgGUhQq1UmmstlTGw4blaed4KoXktQb1zEHZhwoSq+K/SJGmA1Up/Eb1wYcJgOu4NMe9j/OtGyn9lZlVA+iHg1oR1LYhRyPUVv4AmdH5FgIClGuBNpW0m38CrEc+0okgB95I757cgnuRgooXMGxSj+03z7Id4nOb/PsTB6VWcjThAHYhQC/T/ZGRsKNUAJ4ArlG4RbnNfSO601+sYBDwA/IB7f3AepV+dvV9pJmvec3Fd6D6L0+bydKWunE5FBi/v9fk0udfnO8m9Pt9CBa7P/wePecrdjobjvQAAAABJRU5ErkJggg==" alt='' />
          <p>www.crigroups.com</p>
        </div>


      </footer>
    </div>
  );
}

export default App;
