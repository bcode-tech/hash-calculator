import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../../redux/actions";

//Components
import { Button, Text, Image, Box, Textarea, color } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import DoubleSwitch from "../../components/doubleSwitch/doubleSwitch";
import DragAndDrop from "../../components/dragAndDrop/dragAndDrop";
import i18n from "../../imports/i18n";

//style
// import "./home.scss";

import { usePlatformDetector } from "../../imports/utils";

// versioning
import { VERSION } from "../../imports/config";

let url = "/images/logo-bcode-bianco.png",
    link = "https://bcode.cloud",
    marginPowered = "10px";

function Home(props) {
    const { theme, changeTheme } = props;

    const [fileName, setFileName] = useState(false);
    const [generatedHash, setGeneratedHash] = useState(false);
    const [text, setText] = useState("");
    const [type, setType] = useState(false);

    const selectTheme = () => {
        changeTheme(theme === "light" ? "dark" : "light");
    };

    const loadFile = async file => {
        let reader = new FileReader();

        reader.onload = function (event) {
            const wordArray = CryptoJS.lib.WordArray.create(
                event.target.result,
            );

            setGeneratedHash(
                CryptoJS.SHA256(wordArray).toString(CryptoJS.enc.Hex),
            );
        };

        reader.readAsArrayBuffer(file);

        setFileName(file.name);
    };

    const calculateHash = value => {
        setGeneratedHash(CryptoJS.SHA256(value).toString(CryptoJS.enc.Hex));
    };

    useEffect(() => {
        calculateHash(text);
    }, [text]);

    useEffect(() => {
        setGeneratedHash(false);
        setFileName(false);
        setText("");
    }, [type]);

    const platform = usePlatformDetector();

    const openFile = () => {
        document.getElementById("input_file").click();
    };

    return (
        <Box className="home" bg={`${theme}.bg`}>
            <Box bg={`${theme}.topbar`} className={"topbar"}>
                <Image
                    src={url}
                    h={platform === "isDesktop" ? "40px" : "25px"}
                    marginLeft={marginPowered}
                    onClick={() => {
                        window.open("https://bcode.cloud");
                    }}
                />
                {theme === "light" ? (
                    <MoonIcon
                        w={6}
                        h={6}
                        color={`${theme}.colorSelector`}
                        onClick={selectTheme}
                        className="icon"
                    />
                ) : (
                    <SunIcon
                        w={6}
                        h={6}
                        color={`${theme}.colorSelector`}
                        onClick={selectTheme}
                        className="icon"
                    />
                )}
            </Box>

            <DoubleSwitch
                leftValue={i18n.t("file")}
                rightValue={i18n.t("text")}
                value={type}
                onChange={setType}
                theme={theme}
            />

            {type ? (
                <Box className={"mainarea"}>
                    <Text
                        color={`${theme}.text`}
                        // backgroundColor={`${theme}.textBg`}
                        className={"text"}
                    >
                        {i18n.t("calculate_text_hash")}
                    </Text>
                    <Textarea
                        value={text}
                        onChange={e => {
                            setText(e.target.value);
                            // debounceText(e.target.value);
                        }}
                        placeholder={i18n.t("insert_text")}
                        size="lg"
                        className={"textarea"}
                        color={`${theme}.textAreaColor`}
                    />
                    <Box
                        color={`${theme}.text`}
                        backgroundColor={`${generatedHash && theme}.textBg`}
                        className={"text hashText"}
                        fontSize={platform === "isDesktop" ? "16px" : "14px"}
                        wordBreak={
                            platform === "isMobile" ? "break-all" : "unset"
                        }
                    >
                        {generatedHash && (
                            <Text fontWeight={"bold"}>{`${i18n.t(
                                "hash",
                            )}`}</Text>
                        )}
                        {generatedHash && (
                            <Text
                                maxWidth={
                                    platform === "isMobile"
                                        ? "300px"
                                        : platform === "isTablet" && "500px"
                                }
                                className="generatedHash"
                            >
                                {generatedHash}
                            </Text>
                        )}
                    </Box>
                </Box>
            ) : !fileName ? (
                <Box className={"mainarea"}>
                    <Text
                        color={`${theme}.text`}
                        // backgroundColor={`${theme}.textBg`}
                        className={"text"}
                    >
                        {i18n.t("calculate_file_hash")}
                    </Text>
                    <DragAndDrop
                        onChange={file => {
                            loadFile(file[0]);
                        }}
                        backgroundColor={`${theme}.draganddrop`}
                    />
                    <Text color={`${theme}.text`} className="my-3">
                        {i18n.t("or")}
                    </Text>
                    <Button
                        bg={`${theme}.button`}
                        className="text-white py-3 "
                        size="lg"
                        onClick={openFile}
                        margin={"20px"}
                    >
                        {i18n.t("import_file")}
                    </Button>

                    <input
                        id="input_file"
                        style={{ display: "none" }}
                        type="file"
                        onChange={e => {
                            loadFile(e.target.files[0]);
                        }}
                    />
                </Box>
            ) : (
                <Box className={"mainarea hash"}>
                    <Box
                        color={`${theme}.text`}
                        backgroundColor={`${theme}.textBg`}
                        className={"text hashText"}
                        fontSize={
                            platform === "isDesktop"
                                ? "20px"
                                : "isTablet"
                                ? "16px"
                                : "14px"
                        }
                    >
                        <Text fontWeight={"bold"}>{`${i18n.t(
                            "file_name",
                        )}`}</Text>
                        <Text> {fileName}</Text>
                    </Box>
                    <Box
                        color={`${theme}.text`}
                        backgroundColor={`${generatedHash && theme}.textBg`}
                        className={"text hashText"}
                        fontSize={platform === "isDesktop" ? "16px" : "14px"}
                        wordBreak={
                            platform === "isMobile" ? "break-all" : "unset"
                        }
                    >
                        {generatedHash && (
                            <Text fontWeight={"bold"}>{`${i18n.t(
                                "hash",
                            )}`}</Text>
                        )}
                        {generatedHash && (
                            <Text
                                maxWidth={
                                    platform === "isMobile"
                                        ? "300px"
                                        : platform === "isTablet" && "500px"
                                }
                                className="generatedHash"
                            >
                                {generatedHash}
                            </Text>
                        )}
                    </Box>
                    <Button
                        bg={`${theme}.button`}
                        className="text-white"
                        size="lg"
                        onClick={() => {
                            setGeneratedHash(false);
                            setFileName(false);
                        }}
                        margin={"20px"}
                    >
                        {i18n.t("calculate_new_hash")}
                    </Button>
                </Box>
            )}

            <Box
                className={"footer"}
                // height={platform === "isDesktop" ? "75px" : "50px"}
            >
                <Box
                    className={"in"}
                    backgroundColor={`${theme}.topbar`}
                    width={platform === "isDesktop" ? "80%" : "100%"}
                    borderTopLeftRadius={
                        platform === "isDesktop" ? "10px" : "0"
                    }
                    borderTopRightRadius={
                        platform === "isDesktop" ? "10px" : "0"
                    }
                    justifyContent={
                        platform === "isDesktop" ? "space-between" : "center"
                    }
                >
                    <Box
                        className="flex items-center my-2"
                        onClick={() => window.open(link)}
                    >
                        <Text style={{ color: "#DAEDE5" }}>Powered by </Text>
                        <Image
                            src={url}
                            h={platform === "isDesktop" ? "40px" : "25px"}
                            marginLeft={marginPowered}
                        />
                    </Box>{" "}
                    {platform !== "isMobile" && (
                        <Box className="flex items-center my-1">
                            <Text
                                style={{
                                    fontSize: 13,
                                    marginRight: 5,
                                    color: "#DAEDE5",
                                }}
                            >
                                {i18n.t("footer_version")}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: "#DAEDE5",
                                }}
                            >
                                {VERSION}
                            </Text>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(({ user }) => {
    return { theme: user.theme };
}, mapDispatchToProps)(Home);
