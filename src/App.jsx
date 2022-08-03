import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Akuntansi from './components/pages/feb/Akuntansi';
import D3Akuntansi from './components/pages/feb/D3Akuntansi';
import D3keuangan from './components/pages/feb/D3keuangan';
import D3manajemen from './components/pages/feb/D3manajemen';
import D3perpajakan from './components/pages/feb/D3perpajakan';
import IESP from './components/pages/feb/IESP';
import Manajemen from './components/pages/feb/Manajemen';

import Hukum from './components/pages/fh/Hukum';

import BahasaPrancis from './components/pages/fkip/BahasaPrancis';
import BimbKonseling from './components/pages/fkip/BimbKonseling';
import PBIndo from './components/pages/fkip/PBIndo';
import PBInggris from './components/pages/fkip/PBInggris';
import PBLampung from './components/pages/fkip/PBLampung';
import PBiologi from './components/pages/fkip/PBiologi';
import PEkonomi from './components/pages/fkip/PEkonomi';
import PFisika from './components/pages/fkip/PFisika';
import PGeografi from './components/pages/fkip/PGeografi';
import PGSD from './components/pages/fkip/PGSD';
import PJasmani from './components/pages/fkip/PJasmani';
import PKimia from './components/pages/fkip/PKimia';
import PMatematika from './components/pages/fkip/PMatematika';
import PMusik from './components/pages/fkip/PMusik';
import PPKN from './components/pages/fkip/PPKN';
import PSejarah from './components/pages/fkip/PSejarah';
import PTari from './components/pages/fkip/PTari';
import PTekInfo from './components/pages/fkip/PTekInfo';

import Agribisnis from './components/pages/fp/Agribisnis';
import Agronomi from './components/pages/fp/Agronomi';
import Agroteknologi from './components/pages/fp/Agroteknologi';
import BPertanian from './components/pages/fp/BPertanian';
import IlmuKelautan from './components/pages/fp/IlmuKelautan';
import IlmuTanah from './components/pages/fp/IlmuTanah';
import Kehutanan from './components/pages/fp/Kehutanan';
import Nutrisi from './components/pages/fp/Nutrisi';
import Peternakan from './components/pages/fp/Peternakan';
import Proteksi from './components/pages/fp/Proteksi';
import SAkuatik from './components/pages/fp/SAkuatik';
import THasilP from './components/pages/fp/THasilP';
import TIndustriP from './components/pages/fp/TIndustriP';
import TPertanian from './components/pages/fp/TPertanian';
import Penyuluhan from './components/pages/fp/Penyuluhan';

import Arsitektur from './components/pages/ft/Arsitektur';
import D3Survei from './components/pages/ft/D3Survei';
import D3TMesin from './components/pages/ft/D3TMesin';
import D3TSipil from './components/pages/ft/D3TSipil';
import TElektro from './components/pages/ft/TElektro';
import TGeodesi from './components/pages/ft/TGeodesi';
import TGeofisika from './components/pages/ft/TGeofisika';
import TInformatika from './components/pages/ft/TInformatika';
import TKimia from './components/pages/ft/TKimia';
import TLingkungan from './components/pages/ft/TLingkungan';
import TMesin from './components/pages/ft/TMesin';
import TSipil from './components/pages/ft/TSipil';

import Biologi from './components/pages/fmipa/Biologi';
import BiologiT from './components/pages/fmipa/BiologiT';
import D3MInfo from './components/pages/fmipa/D3MInfo';
import Fisika from './components/pages/fmipa/Fisika';
import IlmuKomputer from './components/pages/fmipa/IlmuKomputer';
import Kimia from './components/pages/fmipa/Kimia';
import Matematika from './components/pages/fmipa/Matematika';

import Farmasi from './components/pages/fk/Farmasi';
import PKedokteran from './components/pages/fk/PKedokteran';

import D3APerkantoran from './components/pages/fisip/D3APerkantoran';
import D3HMasyarakat from './components/pages/fisip/D3HMasyarakat';
import D3Perpustakaan from './components/pages/fisip/D3Perpustakaan';
import HubInternasional from './components/pages/fisip/HubInternasional';
import IlmuAdmNegara from './components/pages/fisip/IlmuAdmNegara';
import IlmuKomunikasi from './components/pages/fisip/IlmuKomunikasi';
import IlmuPemerintahan from './components/pages/fisip/IlmuPemerintahan';
import Sosiologi from './components/pages/fisip/Sosiologi';
import Layout from './components/Home/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<div>Hallo</div>} />
            <Route path="feb">
              <Route path="akuntansi" element={<Akuntansi />} />
              <Route path="d3akuntansi" element={<D3Akuntansi />} />
              <Route path="d3keuangan" element={<D3keuangan />} />
              <Route path="d3manajemen" element={<D3manajemen />} />
              <Route path="d3perpajakan" element={<D3perpajakan />} />
              <Route path="iesp" element={<IESP />} />
              <Route path="manajemen" element={<Manajemen />} />
            </Route>
            <Route path="fh">
              <Route path="hukum" element={<Hukum />} />
            </Route>
            <Route path="fkip">
              <Route path="bahasaPrancis" element={<BahasaPrancis />} />
              <Route path="bimbKonseling" element={<BimbKonseling />} />
              <Route path="pgsd" element={<PGSD />} />
              <Route path="pendBIndo" element={<PBIndo />} />
              <Route path="pendBIng" element={<PBInggris />} />
              <Route path="pendBLampung" element={<PBLampung />} />
              <Route path="pendBiologi" element={<PBiologi />} />
              <Route path="pendEkonomi" element={<PEkonomi />} />
              <Route path="pendFisika" element={<PFisika />} />
              <Route path="pendGeografi" element={<PGeografi />} />
              <Route path="penjas" element={<PJasmani />} />
              <Route path="pendKimia" element={<PKimia />} />
              <Route path="pendMtk" element={<PMatematika />} />
              <Route path="pendMusik" element={<PMusik />} />
              <Route path="pendSejarah" element={<PPKN />} />
              <Route path="pendTari" element={<PSejarah />} />
              <Route path="pendTekIn" element={<PTari />} />
              <Route path="ppkn" element={<PTekInfo />} />
            </Route>
            <Route path="fp">
              <Route path="agribisnis" element={<Agribisnis />} />
              <Route path="agronomi" element={<Agronomi />} />
              <Route path="agroteknologi" element={<Agroteknologi />} />
              <Route path="budidayaPerairan" element={<BPertanian />} />
              <Route path="ilmuKelautan" element={<IlmuKelautan />} />
              <Route path="ilmuTanah" element={<IlmuTanah />} />
              <Route path="kehutanan" element={<Kehutanan />} />
              <Route path="nutrisi" element={<Nutrisi />} />
              <Route path="penyuluhan" element={<Penyuluhan />} />
              <Route path="peternakan" element={<Peternakan />} />
              <Route path="proteksiTanaman" element={<Proteksi />} />
              <Route path="sbdAkuatik" element={<SAkuatik />} />
              <Route path="tekPertanian" element={<THasilP />} />
              <Route path="tekHasilPertanian" element={<TIndustriP />} />
              <Route path="tekIndustriPertanian" element={<TPertanian />} />
            </Route>

            <Route path="ft">
              <Route path="arsitektur" element={<Arsitektur />} />
              <Route path="d3Survei" element={<D3Survei />} />
              <Route path="d3TMesin" element={<D3TMesin />} />
              <Route path="d3TSipil" element={<D3TSipil />} />
              <Route path="tElektro" element={<TElektro />} />
              <Route path="tGeodesi" element={<TGeodesi />} />
              <Route path="tGeofisika" element={<TGeofisika />} />
              <Route path="tInformatika" element={<TInformatika />} />
              <Route path="tLingkungan" element={<TLingkungan />} />
              <Route path="tKimia" element={<TKimia />} />
              <Route path="tMesin" element={<TMesin />} />
              <Route path="tSipil" element={<TSipil />} />
            </Route>

            <Route path="fmipa">
              <Route path="biologi" element={<Biologi />} />
              <Route path="bioTerapan" element={<BiologiT />} />
              <Route path="d3mi" element={<D3MInfo />} />
              <Route path="fisika" element={<Fisika />} />
              <Route path="ilmuKomputer" element={<IlmuKomputer />} />
              <Route path="kimia" element={<Kimia />} />
              <Route path="matematika" element={<Matematika />} />
            </Route>
            <Route path="fk">
              <Route path="farmasi" element={<Farmasi />} />
              <Route path="pendKedokteran" element={<PKedokteran />} />
            </Route>
            <Route path="fisip">
              <Route path="d3APerkantoran" element={<D3APerkantoran />} />
              <Route path="d3HMasyarakat" element={<D3HMasyarakat />} />
              <Route path="d3perpustakaan" element={<D3Perpustakaan />} />
              <Route path="HI" element={<HubInternasional />} />
              <Route path="ilmuAdmNegara" element={<IlmuAdmNegara />} />
              <Route path="ilmuKomunikasi" element={<IlmuKomunikasi />} />
              <Route path="ilmuPemerintahan" element={<IlmuPemerintahan />} />
              <Route path="sosiologi" element={<Sosiologi />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
