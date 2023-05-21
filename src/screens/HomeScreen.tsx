import { Text, View, Image, Pressable } from "react-native";
import tw from "twrnc";

import { Screen } from "../components/Screen";

const data = [
  {
    name: "Jane Cooper",
    percent: "20%",
    status: "Paid",
    pending: false,
    image: require("../../assets/Circular.png"),
  },
  {
    name: "Cody Fisher",
    percent: "20%",
    status: "Paid",
    pending: false,
    image: require("../../assets/Circular2.png"),
  },
  {
    name: "Esther Howard",
    percent: "60%",
    status: "Pending",
    pending: true,
    image: require("../../assets/Circular3.png"),
  },
];

export function HomeScreen() {
  return (
    <Screen>
      <svg
        width="261"
        height="156"
        viewBox="0 0 261 156"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", right: "4%" }}
      >
        <g filter="url(#filter0_f_3_1590)">
          <path
            d="M70.5 46.0003L40 -11.9997V-17.9997H238.5V115.5L164.5 46.0003H70.5Z"
            fill="url(#paint0_linear_3_1590)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_3_1590"
            x="0"
            y="-57.9997"
            width="278.5"
            height="213.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="20"
              result="effect1_foregroundBlur_3_1590"
            />
          </filter>
          <linearGradient
            id="paint0_linear_3_1590"
            x1="139.25"
            y1="-17.9997"
            x2="200.5"
            y2="74.5003"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#BA7AFE" />
            <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
            <stop offset="1" stop-color="#F8F7F7" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="178"
        height="195"
        viewBox="0 0 178 195"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", right: "0%", top: "4%" }}
      >
        <g filter="url(#filter0_f_3_1591)">
          <path
            d="M198.728 89.2449L175.114 150.373L170.596 154.321L40.0004 4.83106L140.539 -83L136.884 18.4539L198.728 89.2449Z"
            fill="url(#paint0_linear_3_1591)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_3_1591"
            x="0.000488281"
            y="-123"
            width="238.727"
            height="317.321"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="20"
              result="effect1_foregroundBlur_3_1591"
            />
          </filter>
          <linearGradient
            id="paint0_linear_3_1591"
            x1="105.298"
            y1="79.5758"
            x2="134.662"
            y2="-27.408"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EED7F4" />
            <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
            <stop offset="1" stop-color="#F8F7F7" />
          </linearGradient>
        </defs>
      </svg>

      <View>
        <Text
          style={tw.style(
            { fontFamily: "Inter_700Bold" },
            " text-center text-[0.75rem] text-[#000000] mt-[5rem] leading-[1.25rem] font-bold  "
          )}
        >
          COUNTDOWN
        </Text>
        <Text
          style={tw.style(
            { fontFamily: "Inter_700Bold" },
            " text-center text-[4.5rem] text-[#700CC2] mt-[2.125rem] leading-[1.25rem] font-bold items-center "
          )}
        >
          5:54
        </Text>
      </View>
      <View
        style={tw.style(
          {},
          " w-[21.1875rem] h-[2.5rem] bg-[#F9FAFB] mt-[5.3125rem] mx-auto flex flex-row px-[1.5rem] py-[0.75rem] items-center border-t-[0.1] border-gray-100 rounded-t-[0.1875rem] "
        )}
      >
        <Text
          style={tw.style(
            { fontFamily: "Inter_500Medium" },
            " text-[0.75rem] leading-[1rem] font-medium text-[#6B7280]  "
          )}
        >
          PAYMENT #201 SPLIT
        </Text>
      </View>
      {data.map((item) => (
        <View
          style={tw.style(
            " w-[21.1875rem] h-[4.5rem] flex flex-row items-center py-[1rem] px-[1.5rem] bg-[#FFFFFF] mx-auto  border-t-[0.2] border-gray-100 justify-between "
          )}
        >
          <View style={tw.style("flex flex-row")}>
            <Image
              source={item.image}
              style={tw.style(" w-[2.5rem] h-[2.5rem] rounded-[1.25rem] ")}
            />
            <View style={tw.style(" ml-[1rem] ")}>
              <Text
                style={tw.style(
                  { fontFamily: "Inter_500Medium" },
                  " font-medium text-[0.875rem] leading-[1.25rem] text-[#111827] "
                )}
              >
                {item.name}
              </Text>
              <Text
                style={tw.style(
                  { fontFamily: "Inter_400Regular" },
                  " font-regular text-[0.875rem] leading-[1.25rem] text-[#6B7280] "
                )}
              >
                {item.percent}
              </Text>
            </View>
          </View>
          <Text
            style={tw.style(
              { fontFamily: "Inter_500Medium" },
              " py-[0.375rem] px-[1rem] bg-[#F9F2FF] rounded-[0.375rem] items-center font-medium text-[0.875rem]  leading-[1.25rem]",
              item.pending ? "text-[#7e7777]  " : "text-[#B55CF7]"
            )}
          >
            {item.status}
          </Text>
        </View>
      ))}
      <View
        style={tw.style(
          " w-[21.375rem] h-[1.5rem] mx-auto mt-[4.0625rem] flex flex-row justify-between "
        )}
      >
        <Text
          style={tw.style(
            { fontFamily: "Inter_600SemiBold" },
            " font-semibold text-[0.875rem] leading-[1.5rem] text-[#7e7777] "
          )}
        >
          Merchant
        </Text>
        <Text
          style={tw.style(
            { fontFamily: "Inter_600SemiBold" },
            " font-semibold text-[0.875rem] leading-[1.5rem] text-[#000000] "
          )}
        >
          Juice & co.
        </Text>
      </View>
      <View
        style={tw.style(
          " w-[21.375rem] h-[1.5rem] mx-auto flex flex-row justify-between "
        )}
      >
        <Text
          style={tw.style(
            { fontFamily: "Inter_400Regular" },
            " font-regular text-[0.75rem] leading-[1.5rem] text-[#c0b8b8] "
          )}
        >
          Initiated 2min ago
        </Text>
        <Text
          style={tw.style(
            { fontFamily: "Inter_600SemiBold" },
            " font-semibold text-[0.75rem] leading-[1.5rem] text-[#c0b8b8] "
          )}
        >
          $120,43
        </Text>
      </View>
      <Pressable
        style={tw.style(
          " w-[21.5rem] h-[3.125rem] mx-auto mt-[2.8125rem] rounded-[0.375rem] bg-[#FFFFFF] py-[0.8125rem] px-[6.25rem] items-center shadow  "
        )}
      >
        <Text
          style={tw.style(
            { fontFamily: "Inter_500Medium" },
            " font-medium text-[1rem] leading-[1.5rem] text-[#C20C0C]  "
          )}
        >
          Cancel transaction
        </Text>
      </Pressable>
    </Screen>
  );
}
