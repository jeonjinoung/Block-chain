//스마트 컨트렉트와 스크립트는
async function main() {
  //새로운 스마트계약을 배포하는 데 사용됨
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  //배포를 시작하고 계약 개채로 확인되는 약속을 반환합니다.
  const hello_world = await HelloWorld.deploy("Hello World!");
  console.log("Contract deployed to address:", hello_world.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
