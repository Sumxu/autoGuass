import "./index.scss";
import React, { useEffect, useState, useRef } from "react";
import config from "@/config/config";
import abi from "@/Contract/ABI/abi";
import { ethers } from "ethers";
import { Input, Button, Space, Radio } from "antd-mobile";
import CycleBuy from "@/components/cycleBuy";
import Redeem from "@/components/redeem";
const Home: React.FC = () => {
  const provider = new ethers.JsonRpcProvider(
    "https://rpc.juchain.org",
    210000
  );
  const stakeAddress = "0x2f3b94fa48109809F87AE190167027a86888250A"; //合约地址
  const initInviter = "0xbb0516b107ed130a5b6cd00aedeeeb950716f384"; //初始邀请人
  const [privateKeyList, setPrivateKeyList] = useState<string[]>([]);
  const redeemRef = useRef<any>(null);
  const handleRedeem = () => {
    redeemRef.current?.startUp();
  };
  useEffect(() => {}, []);
  return (
    <div className="home-page-box">
      <div style={{ padding: 8 }}>
        <h1 className="Title">动态配置</h1>
        <Space direction="vertical" style={{ width: "100%" }}>
          <CycleBuy
            onDataChange={setPrivateKeyList}
            redeemChange={handleRedeem}
          />
          <Redeem ref={redeemRef} privateKeyList={privateKeyList} />
        </Space>
      </div>
    </div>
  );
};
export default Home;
