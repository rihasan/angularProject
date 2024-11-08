var app = angular.module('leadsApp', ['ngSanitize']);

app.controller('leadsController', ['$scope', function ($scope, $http, $location, $window, $timeout, $interval) {
     // define ng-model scopes here
    // Initialize the company object with default values if needed
    $scope.business = {
        businessLogo: '',
        friendlyName: '',
        legalName: '',
        businessEmail: '',
        businessPhone: '',
        businessWebsite: '',
        businessNiche: '',
        businessType: '',
        businessIndustry: '',
        businessRegIDType: '',
        businessRegNumber: '',
        streetAddress: '',
        city: '',
        postalCode: '',
        state: '',
        country: 'US',
        timeZone: '',
        contentLanguages: 'en-us',
        repFirstName: '',
        repLastName: '',
        repEmail: '',
        repJobPosition: '',
        repPhoneNumber: ''
    };
    // Define the Countires array
        $scope.countries = [
            { code: 'US', name: 'United States' },
            { code: 'CA', name: 'Canada' },
            { code: 'GB', name: 'United Kingdom' },
            { code: 'FR', name: 'France' },
            { code: 'DE', name: 'Germany' },
            { code: 'IN', name: 'India' },
            { code: 'BR', name: 'Brazil' },
            { code: 'JP', name: 'Japan' },
            { code: 'AU', name: 'Australia' },
            { code: 'CN', name: 'China' },
            { code: 'RU', name: 'Russia' },
            { code: 'ZA', name: 'South Africa' },
            { code: 'IT', name: 'Italy' },
            { code: 'ES', name: 'Spain' },
            { code: 'MX', name: 'Mexico' },
            { code: 'AR', name: 'Argentina' },
            { code: 'NG', name: 'Nigeria' },
            { code: 'EG', name: 'Egypt' },
            { code: 'KE', name: 'Kenya' },
            { code: 'SA', name: 'Saudi Arabia' },
            { code: 'TR', name: 'Turkey' },
            { code: 'KR', name: 'South Korea' },
            { code: 'SE', name: 'Sweden' },
            { code: 'NO', name: 'Norway' },
            { code: 'FI', name: 'Finland' },
            { code: 'DK', name: 'Denmark' },
            { code: 'NL', name: 'Netherlands' },
            { code: 'BE', name: 'Belgium' },
            { code: 'CH', name: 'Switzerland' },
            { code: 'AT', name: 'Austria' },
            { code: 'PL', name: 'Poland' },
            { code: 'GR', name: 'Greece' },
            { code: 'PT', name: 'Portugal' },
            { code: 'IE', name: 'Ireland' },
            { code: 'NZ', name: 'New Zealand' },
            { code: 'SG', name: 'Singapore' },
            { code: 'MY', name: 'Malaysia' },
            { code: 'TH', name: 'Thailand' },
            { code: 'VN', name: 'Vietnam' },
            { code: 'PH', name: 'Philippines' },
            { code: 'ID', name: 'Indonesia' },
            { code: 'PK', name: 'Pakistan' },
            { code: 'BD', name: 'Bangladesh' },
            { code: 'IR', name: 'Iran' },
            { code: 'IQ', name: 'Iraq' },
            { code: 'IL', name: 'Israel' },
            { code: 'AE', name: 'United Arab Emirates' },
            { code: 'QA', name: 'Qatar' },
            { code: 'KW', name: 'Kuwait' },
            { code: 'OM', name: 'Oman' },
            { code: 'LB', name: 'Lebanon' },
            { code: 'JO', name: 'Jordan' },
            { code: 'MA', name: 'Morocco' },
            { code: 'DZ', name: 'Algeria' },
            { code: 'TN', name: 'Tunisia' },
            { code: 'VE', name: 'Venezuela' },
            { code: 'CL', name: 'Chile' },
            { code: 'CO', name: 'Colombia' },
            { code: 'PE', name: 'Peru' },
            { code: 'UY', name: 'Uruguay' },
            { code: 'BO', name: 'Bolivia' },
            { code: 'CU', name: 'Cuba' },
            { code: 'CR', name: 'Costa Rica' },
            { code: 'PA', name: 'Panama' },
            { code: 'SV', name: 'El Salvador' },
            { code: 'HN', name: 'Honduras' },
            { code: 'GT', name: 'Guatemala' },
            { code: 'JM', name: 'Jamaica' },
            { code: 'DO', name: 'Dominican Republic' },
            { code: 'HT', name: 'Haiti' },
            { code: 'SR', name: 'Suriname' },
            { code: 'EC', name: 'Ecuador' },
            { code: 'PY', name: 'Paraguay' },
            { code: 'IS', name: 'Iceland' },
            { code: 'MT', name: 'Malta' },
            { code: 'CY', name: 'Cyprus' },
            { code: 'LU', name: 'Luxembourg' },
            { code: 'MC', name: 'Monaco' },
            { code: 'LI', name: 'Liechtenstein' },
            { code: 'SI', name: 'Slovenia' },
            { code: 'HR', name: 'Croatia' },
            { code: 'CZ', name: 'Czech Republic' },
            { code: 'HU', name: 'Hungary' },
            { code: 'SK', name: 'Slovakia' },
            { code: 'BG', name: 'Bulgaria' },
            { code: 'RO', name: 'Romania' },
            { code: 'RS', name: 'Serbia' },
            { code: 'BA', name: 'Bosnia and Herzegovina' },
            { code: 'ME', name: 'Montenegro' },
            { code: 'AL', name: 'Albania' },
            { code: 'MK', name: 'North Macedonia' },
            { code: 'MD', name: 'Moldova' },
            { code: 'AM', name: 'Armenia' },
            { code: 'GE', name: 'Georgia' },
            { code: 'AZ', name: 'Azerbaijan' },
            { code: 'KG', name: 'Kyrgyzstan' },
            { code: 'UZ', name: 'Uzbekistan' },
            { code: 'TJ', name: 'Tajikistan' },
            { code: 'TM', name: 'Turkmenistan' },
            { code: 'AF', name: 'Afghanistan' },
            { code: 'MM', name: 'Myanmar' },
            { code: 'KH', name: 'Cambodia' },
            { code: 'LA', name: 'Laos' },
            { code: 'BT', name: 'Bhutan' },
            { code: 'NP', name: 'Nepal' },
            { code: 'LK', name: 'Sri Lanka' },
            { code: 'MN', name: 'Mongolia' },
            { code: 'BN', name: 'Brunei' },
            { code: 'TL', name: 'Timor-Leste' },
            { code: 'FJ', name: 'Fiji' },
            { code: 'PG', name: 'Papua New Guinea' },
            { code: 'WS', name: 'Samoa' },
            { code: 'TO', name: 'Tonga' },
            { code: 'SB', name: 'Solomon Islands' },
            { code: 'VU', name: 'Vanuatu' },
            { code: 'NR', name: 'Nauru' },
            { code: 'TV', name: 'Tuvalu' },
            { code: 'KI', name: 'Kiribati' },
            { code: 'MW', name: 'Malawi' },
            { code: 'MZ', name: 'Mozambique' },
            { code: 'ZW', name: 'Zimbabwe' },
            { code: 'ZM', name: 'Zambia' },
            { code: 'BW', name: 'Botswana' },
            { code: 'NA', name: 'Namibia' },
            { code: 'LS', name: 'Lesotho' },
            { code: 'SZ', name: 'Eswatini' },
            { code: 'GM', name: 'Gambia' },
            { code: 'SN', name: 'Senegal' },
            { code: 'GH', name: 'Ghana' },
            { code: 'CI', name: 'Ivory Coast' },
            { code: 'BF', name: 'Burkina Faso' },
            { code: 'ML', name: 'Mali' },
            { code: 'NE', name: 'Niger' },
            { code: 'TG', name: 'Togo' },
            { code: 'BJ', name: 'Benin' },
            { code: 'CF', name: 'Central African Republic' },
            { code: 'TD', name: 'Chad' },
            { code: 'SD', name: 'Sudan' },
            { code: 'SS', name: 'South Sudan' },
            { code: 'ET', name: 'Ethiopia' },
            { code: 'SO', name: 'Somalia' },
            { code: 'ER', name: 'Eritrea' },
            { code: 'DJ', name: 'Djibouti' },
            { code: 'CG', name: 'Republic of the Congo' },
            { code: 'CD', name: 'Democratic Republic of the Congo' },
            { code: 'MG', name: 'Madagascar' },
            { code: 'MR', name: 'Mauritania' },
            { code: 'GN', name: 'Guinea' },
            { code: 'SL', name: 'Sierra Leone' },
            { code: 'LR', name: 'Liberia' },
            { code: 'UG', name: 'Uganda' },
            { code: 'RW', name: 'Rwanda' },
            { code: 'KM', name: 'Comoros' },
            { code: 'ST', name: 'Sao Tome and Principe' },
            { code: 'GA', name: 'Gabon' },
            { code: 'GQ', name: 'Equatorial Guinea' },
            { code: 'BI', name: 'Burundi' },
            { code: 'SZ', name: 'Eswatini' },
            { code: 'CV', name: 'Cape Verde' }
            // ... and so on for all recognized countries
        ];


    // Define the languages array
        $scope.contentLanguages = [
    { value: 'en-us', label: 'English (US)' },
    { value: 'en-gb', label: 'English (UK)' },
    { value: 'en-ca', label: 'English (Canada)' },
    { value: 'en-au', label: 'English (Australia)' },
    { value: 'en-in', label: 'English (India)' },
    { value: 'es-es', label: 'Spanish (Spain)' },
    { value: 'es-mx', label: 'Spanish (Mexico)' },
    { value: 'es-us', label: 'Spanish (US)' },
    { value: 'fr-fr', label: 'French (France)' },
    { value: 'fr-ca', label: 'French (Canada)' },
    { value: 'de-de', label: 'German (Germany)' },
    { value: 'de-at', label: 'German (Austria)' },
    { value: 'de-ch', label: 'German (Switzerland)' },
    { value: 'it-it', label: 'Italian (Italy)' },
    { value: 'it-ch', label: 'Italian (Switzerland)' },
    { value: 'pt-br', label: 'Portuguese (Brazil)' },
    { value: 'pt-pt', label: 'Portuguese (Portugal)' },
    { value: 'nl-nl', label: 'Dutch (Netherlands)' },
    { value: 'nl-be', label: 'Dutch (Belgium)' },
    { value: 'sv-se', label: 'Swedish (Sweden)' },
    { value: 'no-no', label: 'Norwegian (Norway)' },
    { value: 'fi-fi', label: 'Finnish (Finland)' },
    { value: 'da-dk', label: 'Danish (Denmark)' },
    { value: 'ru-ru', label: 'Russian (Russia)' },
    { value: 'zh-cn', label: 'Chinese (Simplified, China)' },
    { value: 'zh-tw', label: 'Chinese (Traditional, Taiwan)' },
    { value: 'zh-hk', label: 'Chinese (Traditional, Hong Kong)' },
    { value: 'ja-jp', label: 'Japanese (Japan)' },
    { value: 'ko-kr', label: 'Korean (South Korea)' },
    { value: 'ar-sa', label: 'Arabic (Saudi Arabia)' },
    { value: 'ar-ae', label: 'Arabic (UAE)' },
    { value: 'ar-eg', label: 'Arabic (Egypt)' },
    { value: 'hi-in', label: 'Hindi (India)' },
    { value: 'bn-bd', label: 'Bengali (Bangladesh)' },
    { value: 'bn-in', label: 'Bengali (India)' },
    { value: 'ur-pk', label: 'Urdu (Pakistan)' },
    { value: 'ur-in', label: 'Urdu (India)' },
    { value: 'pa-in', label: 'Punjabi (India)' },
    { value: 'ta-in', label: 'Tamil (India)' },
    { value: 'ta-lk', label: 'Tamil (Sri Lanka)' },
    { value: 'th-th', label: 'Thai (Thailand)' },
    { value: 'vi-vn', label: 'Vietnamese (Vietnam)' },
    { value: 'id-id', label: 'Indonesian (Indonesia)' },
    { value: 'ms-my', label: 'Malay (Malaysia)' },
    { value: 'tr-tr', label: 'Turkish (Turkey)' },
    { value: 'he-il', label: 'Hebrew (Israel)' },
    { value: 'fa-ir', label: 'Persian (Iran)' },
    { value: 'pl-pl', label: 'Polish (Poland)' },
    { value: 'uk-ua', label: 'Ukrainian (Ukraine)' },
    { value: 'cs-cz', label: 'Czech (Czech Republic)' },
    { value: 'hu-hu', label: 'Hungarian (Hungary)' },
    { value: 'ro-ro', label: 'Romanian (Romania)' },
    { value: 'bg-bg', label: 'Bulgarian (Bulgaria)' },
    { value: 'el-gr', label: 'Greek (Greece)' },
    { value: 'hr-hr', label: 'Croatian (Croatia)' },
    { value: 'sr-rs', label: 'Serbian (Serbia)' },
    { value: 'sk-sk', label: 'Slovak (Slovakia)' },
    { value: 'sl-si', label: 'Slovenian (Slovenia)' },
    { value: 'lt-lt', label: 'Lithuanian (Lithuania)' },
    { value: 'lv-lv', label: 'Latvian (Latvia)' },
    { value: 'et-ee', label: 'Estonian (Estonia)' },
    { value: 'is-is', label: 'Icelandic (Iceland)' },
    { value: 'mt-mt', label: 'Maltese (Malta)' },
    { value: 'ga-ie', label: 'Irish (Ireland)' },
    { value: 'cy-gb', label: 'Welsh (Wales)' },
    { value: 'sq-al', label: 'Albanian (Albania)' },
    { value: 'mk-mk', label: 'Macedonian (North Macedonia)' },
    { value: 'bs-ba', label: 'Bosnian (Bosnia and Herzegovina)' },
    { value: 'ka-ge', label: 'Georgian (Georgia)' },
    { value: 'hy-am', label: 'Armenian (Armenia)' },
    { value: 'kk-kz', label: 'Kazakh (Kazakhstan)' },
    { value: 'uz-uz', label: 'Uzbek (Uzbekistan)' },
    { value: 'mn-mn', label: 'Mongolian (Mongolia)' }
    // Add any additional languages as needed
];

    // Flag to track if form can be updated
    $scope.updatable = false;

    // Watcher to update the 'updatable' flag based on required fields
    $scope.$watch('business', function() {
        $scope.updatable = $scope.isFormComplete();
    }, true);

    // Helper function to check if all required fields are filled
    $scope.isFormComplete = function() {
        return !!(
            $scope.business.friendlyName &&
            $scope.business.legalName &&
            $scope.business.businessEmail &&
            $scope.business.businessPhone &&
            $scope.business.businessType &&
            $scope.business.repFirstName &&
            $scope.business.repLastName &&
            $scope.business.repEmail &&
            $scope.business.repPhoneNumber
        );
    };

    // Function to handle form submission
    $scope.updateBizInfoForm = function() {
        console.log('Business Information:', $scope.business);

        // Reset form state after submission
        $scope.apiStatus = true;
        $scope.apiMessage = 'Form submitted successfully!';
        $scope.updatable = false; // Disable submit button again
    };


        // SMTP Configuration
            $scope.smtp = {
                server: '',
                port: 587,
                security: '',
                username: '',
                password: '',
                from: '',
                senderName: '',
                testEmail: ''
            };

            // Security options for dropdown
            $scope.securityOptions = [
                { value: '', label: 'None' },
                { value: 'ssl', label: 'SSL' },
                { value: 'tls', label: 'TLS' }
            ];

            // Watch the smtp.security model for changes and set port accordingly
                $scope.$watch('smtp.security', function(newSecurity) {
                    if (newSecurity === 'ssl') {
                        $scope.smtp.port = 465;
                    } else if (newSecurity === 'tls') {
                        $scope.smtp.port = 587;
                    } else if (newSecurity === ' ') {
                        $scope.smtp.port = 25;
                    }
                });

            // Check if all required fields are filled (excluding Test Email)
            $scope.isRequiredFieldsFilled = function() {
                return $scope.smtp.username && $scope.smtp.password && $scope.smtp.server &&
                       $scope.smtp.port && $scope.smtp.security && $scope.smtp.senderName;
            };

            // Check if all fields are filled (including optional Test Email)
            $scope.isAllFieldsFilled = function() {
                return $scope.isRequiredFieldsFilled() && $scope.smtp.testEmail;
            };

            $scope.saveSmtpSettings = function() {
                alert('SMTP settings saved');
                console.log($scope.smtp);
            };

            $scope.testConnection = function() {
                alert('Testing SMTP connection');
            };
}]);
