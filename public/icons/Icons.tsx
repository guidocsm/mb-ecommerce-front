export const BurgerMenu = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 27 20" fill="none">
    <path d="M26 1H1M26 10H1M26 19H1" stroke="#FBD468" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const LocationIcon = ({ className = ''}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 12" fill="#FBD468">
    <path d="M1.53 8.784C1.67322 8.73944 1.82716 8.7574 1.95797 8.83391C2.08877 
      8.91043 2.18573 9.03924 2.2275 9.192C2.26927 9.34476 2.25244 9.50897 2.18071 9.6485C2.10897 9.78803 
      1.98822 9.89144 1.845 9.936C1.56375 10.0236 1.36125 10.116 1.23131 10.2C1.36519 10.2858 1.57669 10.3818 
      1.87031 10.4712C2.52 10.6692 3.44981 10.8 4.5 10.8C5.55019 10.8 6.48 10.6692 7.12969 10.4712C7.42387 
      10.3818 7.63481 10.2858 7.76869 10.2C7.63931 10.116 7.43681 10.0236 7.15556 9.936C7.0146 9.88948 
      6.89642 9.78574 6.82649 9.64715C6.75656 9.50855 6.74049 9.3462 6.78174 9.19508C6.82299 9.04396 
      6.91825 8.91619 7.047 8.83929C7.17574 8.76239 7.32766 8.74254 7.47 8.784C7.84575 8.901 8.19 9.051 
      8.45438 9.2436C8.69906 9.423 9 9.7356 9 10.2C9 10.6698 8.69175 10.9848 8.44313 11.1642C8.17425 
      11.3574 7.82269 11.508 7.4385 11.625C6.66338 11.862 5.625 12 4.5 12C3.375 12 2.33663 11.862 1.5615 
      11.625C1.17731 11.508 0.82575 11.3574 0.556875 11.1642C0.30825 10.9842 0 10.6698 0 10.2C0 9.7356 
      0.300937 9.423 0.545625 9.2436C0.81 9.051 1.15425 8.901 1.53 8.784ZM4.5 0C5.61888 0 6.69194 0.474106 
      7.48311 1.31802C8.27428 2.16193 8.71875 3.30653 8.71875 4.5C8.71875 6.0408 7.93125 7.2936 7.11562 
      8.184C6.7914 8.53435 6.44298 8.85826 6.07331 9.153C5.73919 9.4206 4.97531 9.9222 4.97531 
      9.9222C4.83043 10.01 4.66665 10.0562 4.5 10.0562C4.33335 10.0562 4.16957 10.01 4.02469 
      9.9222C3.64543 9.68801 3.27885 9.4312 2.92669 9.153C2.55687 8.85846 2.20844 8.53454 
      1.88437 8.184C1.06875 7.2936 0.28125 6.0408 0.28125 4.5C0.28125 3.30653 0.725724 2.16193 1.51689 1.31802C2.30806 
      0.474106 3.38112 0 4.5 0ZM4.5 1.2C3.67949 1.2 2.89258 1.54768 2.31239 2.16655C1.7322 2.78542 1.40625 3.62479 
      1.40625 4.5C1.40625 5.5896 1.9665 6.5568 2.68875 7.344C3.23212 7.9368 3.83062 8.388 4.24519 8.6652L4.5 
      8.8296L4.75481 8.6652C5.16881 8.388 5.76788 7.9368 6.31125 7.3446C7.0335 6.5568 7.59375 5.5902 7.59375 
      4.5C7.59375 3.62479 7.2678 2.78542 6.68761 2.16655C6.10742 1.54768 5.32051 1.2 4.5 1.2ZM4.5 2.7C4.72161 
      2.7 4.94104 2.74656 5.14578 2.83702C5.35052 2.92748 5.53654 3.06006 5.69324 3.22721C5.84994 3.39435 
      5.97424 3.59278 6.05905 3.81117C6.14385 4.02956 6.1875 4.26362 6.1875 4.5C6.1875 4.73638 6.14385 
      4.97044 6.05905 5.18883C5.97424 5.40722 5.84994 5.60565 5.69324 5.77279C5.53654 5.93994 5.35052 
      6.07253 5.14578 6.16298C4.94104 6.25344 4.72161 6.3 4.5 6.3C4.05245 6.3 3.62322 6.11036 3.30676 
      5.77279C2.99029 5.43523 2.8125 4.97739 2.8125 4.5C2.8125 4.02261 2.99029 3.56477 3.30676 3.22721C3.62322 
      2.88964 4.05245 2.7 4.5 2.7ZM4.5 3.9C4.35082 3.9 4.20774 3.96321 4.10225 4.07574C3.99676 4.18826 3.9375 
      4.34087 3.9375 4.5C3.9375 4.65913 3.99676 4.81174 4.10225 4.92426C4.20774 5.03679 4.35082 5.1 4.5
      5.1C4.64918 5.1 4.79226 5.03679 4.89775 4.92426C5.00324 4.81174 5.0625 4.65913 5.0625 4.5C5.0625 
      4.34087 5.00324 4.18826 4.89775 4.07574C4.79226 3.96321 4.64918 3.9 4.5 3.9Z"
    />
  </svg>    
)

export const SearchIcon = ({ className = ''}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
    <path d="M14.6818 15.2857L11.3807 11.8389M11.3807 
    11.8389C11.9454 11.2493 12.3933 10.5494 
    12.6989 9.77907C13.0045 9.00874 13.1618 
    8.1831 13.1618 7.3493C13.1618 6.5155 
    13.0045 5.68986 12.6989 4.91953C12.3933 
    4.14919 11.9454 3.44925 11.3807 2.85967C10.8161 2.27008 10.1457 
    1.80239 9.40795 1.48331C8.67018 1.16423 7.87945 1 7.0809 1C6.28234 
    1 5.49161 1.16423 4.75384 1.48331C4.01607 1.80239 
    3.34572 2.27008 2.78105 2.85967C1.64066 4.05039 1 
    5.66536 1 7.3493C1 9.03324 1.64066 10.6482 2.78105 
    11.8389C3.92144 13.0297 5.46814 13.6986 7.0809 
    13.6986C8.69365 13.6986 10.2403 13.0297 11.3807 
    11.8389Z" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
)

export const LocationSecondaryIcon = ({ className = '' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M5.5 12.9993L5.97325 12.4674C6.51025 11.8539 6.99325 11.2719 7.423 10.7183L7.77775 
      10.2515C9.259 8.26089 10 6.68094 10 5.51318C10 3.02057 7.9855 1 5.5 1C3.0145 1 1 3.02057 
      1 5.51318C1 6.68094 1.741 8.26089 3.22225 10.2515L3.577 10.7183C4.19008 11.5019 4.8315 12.2622 
      5.5 12.9993Z" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
    />
    <path d="M5.49988 7.3587C6.53541 7.3587 7.37488 6.52138 7.37488 5.48849C7.37488 4.45561 6.53541 3.61829 
      5.49988 3.61829C4.46434 3.61829 3.62488 4.45561 3.62488 5.48849C3.62488 6.52138 4.46434 7.3587 
      5.49988 7.3587Z" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
)

export const PhoneIcon = ({ className = '' }) => (
  <svg  className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none">
    <path d="M11.4223 8.06756L8.59567 6.80094L8.58787 6.79734C8.44112 6.73458 8.28105 6.70939 
      8.12212 6.72406C7.9632 6.73873 7.81044 6.79279 7.67766 6.88135C7.66202 6.89166 
      7.64699 6.90288 7.63266 6.91495L6.17225 8.15996C5.24704 7.71055 4.29184 6.76254 
      3.84243 5.84934L5.08924 4.36672C5.10124 4.35172 5.11264 4.33672 5.12344 4.32052C5.2101 
      4.1881 5.26268 4.03631 5.27649 3.87866C5.29031 3.72101 5.26494 3.56239 5.20264 3.41691V3.40971L3.93243 
      0.578284C3.85008 0.388241 3.70847 0.22993 3.52874 0.126983C3.34902 0.024036 3.14082 -0.018025 2.93523 
      0.00707865C2.1222 0.114064 1.37592 0.513345 0.835771 1.13035C0.29562 1.74735 -0.00146457 2.53988 
      5.42922e-06 3.35991C5.42922e-06 8.12396 3.87603 12 8.64007 12C9.4601 12.0015 10.2526 11.7044 10.8696 
      11.1642C11.4866 10.6241 11.8859 9.87779 11.9929 9.06477C12.018 8.85924 11.9761 8.65109 11.8732 8.47138C11.7704 
      8.29166 11.6122 8.15001 11.4223 8.06756ZM8.64007 11.04C6.60387 11.0378 4.65171 10.2279 3.2119 8.78809C1.7721 
      7.34828 0.962236 5.39611 0.960012 3.35991C0.957755 2.774 1.16884 2.2073 1.55386 1.76564C1.93887 
      1.32398 2.47148 1.03757 3.05223 0.959888C3.05199 0.962282 3.05199 0.964694 3.05223 0.967088L4.31224 
      3.78712L3.07203 5.27153C3.05941 5.28599 3.04798 5.30144 3.03783 5.31773C2.94754 5.45628 2.89457 
      5.61581 2.88405 5.78085C2.87354 5.94589 2.90584 6.11085 2.97783 6.25974C3.52143 7.37155 4.64164 
      8.48336 5.76545 9.02637C5.91543 9.09768 6.08134 9.12886 6.24698 9.11687C6.41261 9.10488 6.57231 
      9.05013 6.71045 8.95796C6.72589 8.94763 6.74072 8.93641 6.75485 8.92437L8.21346 7.67995L11.0335 
      8.94296H11.0401C10.9634 9.52453 10.6774 10.0582 10.2356 10.4442C9.79389 10.8302 9.22667 11.042 8.64007 11.04Z" fill="black"
    />
  </svg>
)

export const ScheduleIcon = ({ className = '' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12" fill="none">
    <path d="M8.93067 8.90267L9.40267 8.43067L6.83333 5.86133V2.66667H6.16667V6.13867L8.93067 8.90267ZM6.502 12C5.67267 
      12 4.89267 11.8427 4.162 11.528C3.43178 11.2129 2.79644 10.7853 2.256 10.2453C1.71556 9.70533 1.28778 
      9.07067 0.972667 8.34133C0.657556 7.612 0.5 6.83222 0.5 6.002C0.5 5.17178 0.657556 4.39178 0.972667 
      3.662C1.28733 2.93178 1.71422 2.29644 2.25333 1.756C2.79244 1.21556 3.42733 0.787778 4.158 0.472667C4.88867 
      0.157556 5.66867 0 6.498 0C7.32733 0 8.10733 0.157556 8.838 0.472667C9.56822 0.787333 10.2036 1.21444 
      10.744 1.754C11.2844 2.29356 11.7122 2.92844 12.0273 3.65867C12.3424 4.38889 12.5 5.16867 12.5 5.998C12.5 
      6.82733 12.3427 7.60733 12.028 8.338C11.7133 9.06867 11.2858 9.704 10.7453 10.244C10.2049 10.784 9.57022 
      11.2118 8.84133 11.5273C8.11244 11.8429 7.33267 12.0004 6.502 12ZM6.5 11.3333C7.97778 11.3333 9.23622 10.814 
      10.2753 9.77533C11.3144 8.73667 11.8338 7.47822 11.8333 6C11.8329 4.52178 11.3136 3.26333 10.2753 2.22467C9.23711 1.186 
      7.97867 0.666667 6.5 0.666667C5.02133 0.666667 3.76289 1.18622 2.72467 2.22533C1.68644 3.26444 1.16711 4.52267 
      1.16667 6C1.16622 7.47733 1.68578 8.73578 2.72533 9.77533C3.76489 10.8149 5.02311 11.3342 6.5 11.3333Z" fill="black"
    />
  </svg>
)

export const CroissantIcon = ({ className = ''}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" viewBox="0 0 512.646 512.646" xmlSpace="preserve">
    <g transform="translate(1 1)">
      <g>
        <path d="M502.789,305.669c-15.186-30.371-36.216-58.235-60.605-82.777c-1.488-16.016-7.989-31.661-19.608-44.37    
        c-19.981-23.178-48.945-37.372-79.179-39.779c-1.452-3.091-3.207-6.068-5.301-8.86c-8.533-11.947-23.04-19.627-38.4-19.627    
        h-90.453c-15.36,0-29.013,7.68-38.4,19.627c-1.705,2.273-3.177,4.673-4.456,7.151c-30.845,2.742-60.523,16.985-80.877,39.782    
        c-12.519,13.693-19.101,30.794-19.865,48.096c-23.113,23.835-42.381,50.669-57.789,79.051c-11.947,20.48-11.947,46.08,0.853,66.56 
           c11.093,18.773,33.28,29.867,55.467,29.867c7.68,0,15.36-0.853,22.187-4.267l89.443-35.455    
           c11.203,4.253,23.063,6.442,35.143,6.442c4.53,0,9.049-0.39,13.08-1.391c6.558,10.814,17.933,17.604,30.44,17.604    
           c12.327,0,23.55-6.599,30.15-17.142c4.421,0.526,8.698,0.929,13.37,0.929c12.039,0,23.859-2.171,35.027-6.286l89.559,36.152    
           c6.827,2.56,14.507,3.413,22.187,3.413c20.48,0,43.52-9.387,57.173-28.16C514.736,351.749,514.736,326.149,502.789,305.669z     
           M80.389,380.763c-17.92,6.827-45.227,1.707-58.027-18.773c-9.387-15.36-9.387-34.133,0-49.493    
           c12.681-23.671,27.878-44.828,45.585-65.134c3.21,12.579,9.641,24.494,19.269,34.414l58.027,60.587    
           c3.354,2.896,6.849,5.537,10.456,7.938L80.389,380.763z M184.03,345.331c-0.777-0.808-1.751-1.517-2.947-2.115    
           c-8.533-3.413-16.213-7.68-23.04-13.653l-57.173-59.733c-11.093-11.947-17.067-26.453-17.067-42.667    
           c0-1.247-0.344-2.38-0.903-3.399c0.958-12.994,6.045-25.74,15.41-35.854c16.213-17.92,38.4-29.867,62.293-33.28    
           c-0.853,7.68,0,15.36,2.56,22.187l53.76,172.373C205.7,350.053,194.48,348.725,184.03,345.331z M254.469,366.256    
           c-6.827,0-14.507-3.413-17.92-13.653l-57.173-180.907c-3.413-11.093-1.707-22.187,5.12-31.573c5.973-7.68,14.507-12.8,24.747-12.8    
           h90.453c9.387,0,18.773,4.267,24.747,12.8c1.493,2.052,2.725,4.232,3.729,6.484c0.052,0.999,0.239,2.003,0.538,2.902    
           c1.077,2.153,1.812,4.477,2.236,6.889c0.691,5.18,0.239,10.431-1.383,15.297l-57.173,180.907    
           c-0.106,0.319-0.229,0.612-0.344,0.918c-0.503,0.194-0.51,0.788-0.51,0.788c-0.225,0.451-0.386,0.964-0.477,1.518    
           C267.233,363.564,260.519,366.256,254.469,366.256z M291.297,349.197l54.479-172.38c2.56-7.68,3.413-14.507,2.56-22.187    
           c23.04,4.267,45.227,15.36,61.44,32.427c21.333,23.04,20.48,58.88-0.853,81.92l-57.173,59.733    
           C335.569,344.038,313.439,350.865,291.297,349.197z M485.723,361.989c-11.947,19.627-39.253,25.6-57.173,18.773l-74.863-30.282    
           c3.448-2.221,6.795-4.635,10.01-7.265l57.173-59.733c10.167-10.475,16.754-23.178,19.762-36.536    
           c17.861,20.437,33.177,42.57,45.944,66.403C495.109,327.856,495.109,346.629,485.723,361.989z"
           />
      </g>
    </g>
  </svg>
)