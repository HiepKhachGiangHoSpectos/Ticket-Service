node version: v16.16.0
npm version: 8.11.0


cac buoc install
npm install -g typescript
mkdir Ticket-Service
cd Ticket-Service
npm init -y

// tao file tsconfig.json
npx tsc --init


// muon generate cac file cho mot customer,
node generate-files baoquanhan

// muon xoa cac file cho mot customer
node delete-files baoquanhan
